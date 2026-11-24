using RDF;
using Serilog;
using System.Net;
using VDS.RDF.Parsing;
using VDS.RDF.Query;

namespace GenerateTestData.SPARQL
{
    public class Server
    {
        #region Constants
        //private readonly string _sparqlEndpoint = "http://vngtriplestore:3030/"; // Docker container name for Fuseki server
        private readonly string _sparqlEndpoint = "http://localhost:3030/"; // Windows local development
        private readonly string _user = "admin";
        private readonly string _password = "admin123";
        #endregion

        #region Fields
        private readonly ILogView _logView;
        #endregion

        public Server(ILogView logView)
        {
            _logView = logView ?? throw new ArgumentNullException(nameof(logView));
        }

        public bool CreateDataset(string datasetName)
        {
            try
            {
                // Attempt to delete the dataset if it exists
                DeleteDataset(datasetName);

                using var client = new HttpClient { Timeout = TimeSpan.FromMinutes(30) };

                var requestUri = $"{_sparqlEndpoint}$/datasets";
                var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                // Create the assembler configuration
                var assemblerConfig = $@"@prefix :        <#> .
@prefix fuseki:  <http://jena.apache.org/fuseki#> .
@prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:    <http://www.w3.org/2000/01/rdf-schema#> .
@prefix tdb2:    <http://jena.apache.org/2016/tdb#> .
@prefix ja:      <http://jena.hpl.hp.com/2005/11/Assembler#> .
@prefix shacl:   <http://www.w3.org/ns/shacl#> .

:service rdf:type fuseki:Service ;
    fuseki:name ""{datasetName}"" ;
    fuseki:endpoint [ fuseki:operation fuseki:query ] ;
    fuseki:endpoint [ fuseki:operation fuseki:update ] ;
    fuseki:endpoint [ fuseki:operation fuseki:gsp-rw ] ;
    fuseki:endpoint [ fuseki:operation fuseki:shacl ;
                     fuseki:name ""shacl"" ] ;
    fuseki:dataset :dataset .

:dataset rdf:type tdb2:DatasetTDB ;
    tdb2:location ""{datasetName}"" .
";

                // Create multipart/form-data content
                using var content = new MultipartFormDataContent();
                var fileContent = new ByteArrayContent(System.Text.Encoding.UTF8.GetBytes(assemblerConfig));
                fileContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");
                content.Add(fileContent, "file", $"{datasetName}-assembler.ttl");

                var response = client.PostAsync(requestUri, content).Result;

                if (response.IsSuccessStatusCode)
                {
                    _logView.LogInformation($"Dataset '{datasetName}' created successfully with SHACL support.");
                    return true;
                }
                else
                {
                    _logView.LogError($"Failed to delete dataset '{datasetName}'. Status code: {response.StatusCode}");
                    return false;
                }
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while validating dataset '{datasetName}'");
                return false;
            }
        }

        public bool DeleteDataset(string datasetName)
        {
            try
            {
                using var client = new HttpClient { Timeout = TimeSpan.FromMinutes(30) };
                var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                // First, drop all graphs to clear the data
                var updateUri = $"{_sparqlEndpoint}{datasetName}";
                var dropAllQuery = "DROP ALL";
                var updateContent = new StringContent($"update={Uri.EscapeDataString(dropAllQuery)}", System.Text.Encoding.UTF8, "application/x-www-form-urlencoded");

                var dropResponse = client.PostAsync(updateUri, updateContent).Result;
                if (dropResponse.IsSuccessStatusCode)
                {
                    _logView.LogInformation($"TTL file '{datasetName}' not found. Skipping.");
                }
                else
                {
                    _logView.LogWarning($"Failed to drop graphs from dataset '{datasetName}'. Status code: {dropResponse.StatusCode}");
                }

                // Then delete the dataset from Fuseki
                var requestUri = $"{_sparqlEndpoint}$/datasets/{datasetName}";
                var response = client.DeleteAsync(requestUri).Result;

                if (response.IsSuccessStatusCode)
                {
                    _logView.LogInformation($"Dataset '{datasetName}' deleted from Fuseki server.");
                    return true;
                }
                else
                {
                    _logView.LogError($"Failed to delete dataset '{datasetName}'. Status code: {response.StatusCode}");
                    return false;
                }
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while deleting dataset '{datasetName}'");
                return false;
            }
        }

        public bool AddData(string datasetName, List<string> ttlFiles)
        {
            try
            {
                foreach (var ttlFile in ttlFiles)
                {
                    if (!File.Exists(ttlFile))
                    {
                        _logView.LogWarning($"TTL file '{ttlFile}' not found. Skipping.");
                        continue;
                    }

                    using var handler = new HttpClientHandler
                    {
                        AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
                    };
                    using var client = new HttpClient(handler) { Timeout = TimeSpan.FromMinutes(30) };

                    // Use Basic Authentication header
                    var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                    client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                    var requestUri = $"{_sparqlEndpoint}{datasetName}/";

                    using var content = new MultipartFormDataContent();

                    using var fileStream = File.OpenRead(ttlFile);
                    var streamContent = new StreamContent(fileStream);
                    streamContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");
                    content.Add(streamContent, "files[]", Path.GetFileName(ttlFile));

                    var response = client.PostAsync(requestUri, content).Result;
                    if (response.IsSuccessStatusCode)
                    {
                        _logView.LogInformation($"Data from file '{ttlFile}' added to dataset '{datasetName}' successfully.");
                    }
                    else
                    {
                        var responseBody = response.Content.ReadAsStringAsync().Result;
                        _logView.LogError($"Failed to add data from file '{ttlFile}' to dataset '{datasetName}'. Status code: {response.StatusCode}, Response: {responseBody}");
                        return false;
                    }
                }
                return true;
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while adding data to dataset '{datasetName}'.");
                return false;
            }
        }

        public async Task<bool> ExecuteInsertAsync(string datasetName, string query)
        {
            try
            {
                _logView.LogInformation($"Executing insert into dataset '{datasetName}' with query: {query}");

                var updateUri = $"{_sparqlEndpoint}{datasetName}";

                using var client = new HttpClient { Timeout = TimeSpan.FromMinutes(30) };

                // Add basic authentication
                var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                // Send as SPARQL Update
                var content = new StringContent($"update={Uri.EscapeDataString(query)}", System.Text.Encoding.UTF8, "application/x-www-form-urlencoded");

                var response = await client.PostAsync(updateUri, content);

                if (response.IsSuccessStatusCode)
                {
                    _logView.LogInformation("Insert executed successfully.");
                    return true;
                }
                else
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    throw new Exception($"Insert failed. Status code: {response.StatusCode}, Response: {responseBody}");
                }
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while inserting into dataset '{datasetName}'");
                throw;
            }
        }

        public async Task<string> ExecuteSHACLAsync(string datasetName, string graph, string shacl)
        {
            try
            {
                _logView.LogInformation($"Executing SHACL validation on dataset '{datasetName}' for graph '{graph}'");

                var shaclUri = $"{_sparqlEndpoint}{datasetName}/shacl?graph={Uri.EscapeDataString(graph)}";

                using var client = new HttpClient { Timeout = TimeSpan.FromMinutes(30) };

                // Add basic authentication
                var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));

                // Send as SPARQL Update
                var content = new StringContent(shacl, System.Text.Encoding.UTF8, "text/turtle");

                var response = await client.PostAsync(shaclUri, content);
                var responseBody = await response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)
                {
                    _logView.LogInformation("Validation executed successfully.");
                    return responseBody;
                }
                else
                {
                    throw new Exception($"Validation failed. Status code: {response.StatusCode}, Response: {responseBody}");
                }
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while validating dataset '{datasetName}'");
                throw;
            }
        }

        public async Task<SparqlResultSet> ExecuteQueryAsync(string datasetName, string query)
        {
            try
            {
                _logView.LogInformation($"Executing query on dataset '{datasetName}': {query}");

                var queryUri = $"{_sparqlEndpoint}{datasetName}?query={Uri.EscapeDataString(query)}";
                using var client = new HttpClient { Timeout = TimeSpan.FromMinutes(30) };

                // Add basic authentication
                var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/sparql-results+json"));

                var response = await client.GetAsync(queryUri);
                var responseBody = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    var parser = new SparqlJsonParser();
                    using var reader = new StringReader(responseBody);
                    var results = new SparqlResultSet();
                    parser.Load(results, reader);
                    return results;
                }
                else
                {
                    throw new Exception($"Query failed. Status code: {response.StatusCode}, Response: {responseBody}");
                }
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while querying dataset '{datasetName}'");
                throw;
            }
        }

        public async Task<int> RetrieveGeometry(SparqlResultSet resultSet, string geometryField, long owlModel)
        {
            if (resultSet.Count == 0)
            {
                return await Task.FromResult(0);
            }

            try
            {
                var resultId = Guid.NewGuid().ToString();
                foreach (SparqlResult result in resultSet)
                {
                    var base64Data = result[geometryField]?.ToString();
                    if (string.IsNullOrEmpty(base64Data))
                    {
                        continue;
                    }

                    var typeIndex = base64Data.LastIndexOf("^^");
                    if (typeIndex > 0)
                    {
                        base64Data = base64Data.Substring(0, typeIndex);
                    }

                    var modelPath = Path.Combine(Path.GetTempPath(), $"temp_{resultId}.bin");
                    File.WriteAllBytes(modelPath, Convert.FromBase64String(base64Data));
                    Engine.ImportModel(owlModel, modelPath);
                    File.Delete(modelPath);
                }

                return await Task.FromResult(resultSet.Count);
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, "Error processing results from SPARQL query.");
                throw;
            }
        }

        public List<string> RetrieveGeometries(SparqlResultSet resultSet, string geometryField)
        {
            var geometries = new List<string>();

            if (resultSet.Count == 0)
            {
                return geometries;
            }

            try
            {
                var resultId = Guid.NewGuid().ToString();
                foreach (SparqlResult result in resultSet)
                {
                    var base64Data = result[geometryField]?.ToString();
                    if (string.IsNullOrEmpty(base64Data))
                    {
                        continue;
                    }

                    var typeIndex = base64Data.LastIndexOf("^^");
                    if (typeIndex > 0)
                    {
                        base64Data = base64Data.Substring(0, typeIndex);
                    }

                    geometries.Add(base64Data);
                }

                return geometries;
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, "Error processing results from SPARQL query.");
                throw;
            }
        }

        public async Task<string?> RetrieveValue(SparqlResultSet resultSet, string valueField, long owlModel)
        {
            ArgumentNullException.ThrowIfNull(resultSet);
            ArgumentException.ThrowIfNullOrWhiteSpace(valueField);

            return await Task.Run(() =>
            {
                foreach (var result in resultSet)
                {
                    if (!result.TryGetValue(valueField, out var node) || node == null)
                    {
                        continue;
                    }

                    // Return the first bound value only
                    return node switch
                    {
                        VDS.RDF.ILiteralNode literal => literal.Value,
                        VDS.RDF.IUriNode uriNode => uriNode.Uri.ToString(),
                        _ => node.ToString()
                    };
                }

                _logView.LogWarning($"Field '{valueField}' not found in result set for OWL model {owlModel}.");

                return null;
            });
        }

        /// <summary>
        /// Asynchronously executes a SPARQL query against a dataset and saves the result in Turtle format to a
        /// specified file.
        /// </summary>
        /// <param name="datasetName">The name of the dataset to query.</param>
        /// <param name="query">The SPARQL query to execute.</param>
        /// <param name="outputFile">The file path where the query result in Turtle format will be saved.</param>
        /// <returns>True if the query result is successfully saved; otherwise, false.</returns>
        /// <example>
        /// await server.SaveQueryResultAsTtlAsync(
        ///     "mydataset",
        ///     "CONSTRUCT { ?s ?p ?o } WHERE { ?s ?p ?o }",
        /// @"C:\temp\result.ttl");
        /// </example>
        public async Task<bool> SaveQueryResultAsTtlAsync(string datasetName, string query, string outputFile)
        {
            try
            {
                using var handler = new HttpClientHandler
                {
                    AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate
                };
                using var client = new HttpClient(handler) { Timeout = TimeSpan.FromMinutes(30) };

                var byteArray = System.Text.Encoding.ASCII.GetBytes($"{_user}:{_password}");
                client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(byteArray));
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("text/turtle"));

                var requestUri = $"{_sparqlEndpoint}{datasetName}/query";

                // POST the query as a form to avoid URL length limits
                using var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("query", query)
                });

                // ResponseHeadersRead lets us stream large results to disk
                using var request = new HttpRequestMessage(HttpMethod.Post, requestUri) { Content = content };
                using var response = await client.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);

                if (!response.IsSuccessStatusCode)
                {
                    var error = await response.Content.ReadAsStringAsync();
                    _logView.LogError($"Failed to execute query on dataset '{datasetName}'. Status code: {response.StatusCode}. {error}");
                    return false;
                }

                var directory = Path.GetDirectoryName(outputFile);
                if (!string.IsNullOrEmpty(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                await using var responseStream = await response.Content.ReadAsStreamAsync();
                await using var fileStream = File.Create(outputFile);
                await responseStream.CopyToAsync(fileStream);

                _logView.LogInformation($"Query result saved to '{outputFile}'.");
                return true;
            }
            catch (Exception ex)
            {
                _logView.LogError(ex, $"Exception occurred while saving query result to '{outputFile}'");
                return false;
            }
        }
    }
}
