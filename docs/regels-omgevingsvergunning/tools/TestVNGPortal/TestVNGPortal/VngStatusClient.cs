using System;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR.Client;

namespace TestVNGPortal;

public sealed record ProgressUpdate(float Progress, string? Message, bool Error);

public sealed record QueryUpdate(string? Type, string? Query, string? Result, bool Error);

public sealed record View3DUpdate(string? Title, string? WorkflowId, string? Model, bool Error);

public sealed class VngStatusClient : IAsyncDisposable
{
    private readonly HubConnection _connection;
    private string? _groupName;

    public event Action<string>? StatusUpdateReceived;
    public event Action<ProgressUpdate>? ProgressUpdateReceived;
    public event Action<QueryUpdate>? QueryUpdateReceived;
    public event Action<View3DUpdate>? View3DUpdateReceived;

    public event Action<string>? ConnectionStateChanged;

    public VngStatusClient(string baseAddress)
    {
        _connection = new HubConnectionBuilder()
            .WithUrl(new Uri(new Uri(baseAddress), "/statusHub"))
            .WithAutomaticReconnect(new[]
            {
                TimeSpan.Zero,
                TimeSpan.FromSeconds(2),
                TimeSpan.FromSeconds(5),
                TimeSpan.FromSeconds(10),
                TimeSpan.FromSeconds(30)
            })
            .Build();

        _connection.ServerTimeout = TimeSpan.FromSeconds(60);
        _connection.KeepAliveInterval = TimeSpan.FromSeconds(15);

        _connection.On<string>("ReceiveStatusUpdate", p => StatusUpdateReceived?.Invoke(p));
        _connection.On<ProgressUpdate>("ReceiveProgressUpdate", p => ProgressUpdateReceived?.Invoke(p));
        _connection.On<QueryUpdate>("ReceiveQueryUpdate", q => QueryUpdateReceived?.Invoke(q));
        _connection.On<View3DUpdate>("Receive3DViewUpdate", v => View3DUpdateReceived?.Invoke(v));

        _connection.Reconnecting += error =>
        {
            ConnectionStateChanged?.Invoke("Reconnecting");
            return Task.CompletedTask;
        };

        _connection.Reconnected += async connectionId =>
        {
            if (_groupName != null)
            {
                await _connection.InvokeAsync("JoinGroup", _groupName);
            }

            ConnectionStateChanged?.Invoke("Reconnected");
        };

        _connection.Closed += error =>
        {
            ConnectionStateChanged?.Invoke("Closed");
            return Task.CompletedTask;
        };
    }

    public async Task StartAsync(CancellationToken cancellationToken = default)
    {
        while (true)
        {
            try
            {
                await _connection.StartAsync(cancellationToken);
                ConnectionStateChanged?.Invoke("Connected");
                return;
            }
            catch (OperationCanceledException)
            {
                throw;
            }
            catch
            {
                await Task.Delay(TimeSpan.FromSeconds(5), cancellationToken);
            }
        }
    }

    public async Task JoinTaskAsync(string taskId, CancellationToken cancellationToken = default)
    {
        _groupName = taskId;
        await _connection.InvokeAsync("JoinGroup", taskId, cancellationToken);
    }

    public async Task LeaveTaskAsync(CancellationToken cancellationToken = default)
    {
        if (_groupName == null)
        {
            return;
        }

        await _connection.InvokeAsync("LeaveGroup", _groupName, cancellationToken);
        _groupName = null;
    }

    public async ValueTask DisposeAsync()
    {
        await _connection.DisposeAsync();
    }
}