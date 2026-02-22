import { Request, Response } from 'express';

// Mock data for leaderboard
let leaderboard = [];

// Function to get the leaderboard
export const getLeaderboard = (req: Request, res: Response) => {
    return res.status(200).json(leaderboard);
};

// Function to update the leaderboard
export const updateLeaderboard = (req: Request, res: Response) => {
    const { userId, score } = req.body;
    
    if (!userId || score === undefined) {
        return res.status(400).json({ message: "User ID and score are required." });
    }

    // Update or add user's score
    const userIndex = leaderboard.findIndex(entry => entry.userId === userId);
    if (userIndex > -1) {
        leaderboard[userIndex].score = score; // Update score
    } else {
        leaderboard.push({ userId, score }); // Add new entry
    }

    return res.status(200).json(leaderboard);
};
