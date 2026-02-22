import React, { useEffect, useState } from 'react';

const Leaderboard: React.FC = () => {
    const [scores, setScores] = useState<{ username: string; score: number }[]>([]);

    useEffect(() => {
        const socket = new WebSocket('ws://yourWebSocketUrl');

        socket.onmessage = (event) => {
            const updatedScores = JSON.parse(event.data);
            setScores(updatedScores);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h1>Leaderboard</h1>
            <ul>
                {scores.map((player) => (
                    <li key={player.username}>{player.username}: {player.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
