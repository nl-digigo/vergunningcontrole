using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading;
using System.Threading.Tasks;

namespace TestVNGPortal;

public sealed record UploadResult(
    [property: JsonPropertyName("taskId")] string? TaskId,
    [property: JsonPropertyName("error")] string? Error);

public sealed class VngPortalClient : IDisposable
{
    private readonly HttpClient _httpClient;

    public VngPortalClient(string baseAddress)
    {
        _httpClient = new HttpClient
        {
            BaseAddress = new Uri(baseAddress),
            Timeout = TimeSpan.FromMinutes(10)
        };
    }

    /// <summary>
    /// Calls IndexModel.OnPostAsync: uploads an IFC file and starts the selected workflow.
    /// </summary>
    public async Task<UploadResult> UploadIfcAsync(
        string ifcFilePath,
        string workflowId,
        CancellationToken cancellationToken = default)
    {
        if (!File.Exists(ifcFilePath))
        {
            throw new FileNotFoundException("IFC file not found.", ifcFilePath);
        }

        using var content = new MultipartFormDataContent();
        content.Add(new StringContent(workflowId), "SelectedWorkflowId");

        await using var fileStream = File.OpenRead(ifcFilePath);
        using var fileContent = new StreamContent(fileStream);
        fileContent.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
        content.Add(fileContent, "IfcFile", Path.GetFileName(ifcFilePath));

        using var response = await _httpClient.PostAsync("/", content, cancellationToken);
        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync(cancellationToken);
        return JsonSerializer.Deserialize<UploadResult>(json)
            ?? new UploadResult(null, "Empty response from server.");
    }

    public void Dispose() => _httpClient.Dispose();
}