import WebSocket from 'ws';

class WebSocketService {
    constructor(server) {
        this.wss = new WebSocket.Server({ server });
        this.connectedClients = new Set();
        this.init();
    }

    init() {
        this.wss.on('connection', (ws) => {
            this.connectedClients.add(ws);
            ws.on('close', () => this.connectedClients.delete(ws));
        });
    }

    broadcastLeaderboard(leaderboardData) {
        const message = JSON.stringify({ type: 'leaderboard', data: leaderboardData });
        this.connectedClients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }

    broadcastRanking(rankingData) {
        const message = JSON.stringify({ type: 'ranking', data: rankingData });
        this.connectedClients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    }
}

export default WebSocketService;