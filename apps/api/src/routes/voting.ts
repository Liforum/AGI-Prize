import express from 'express';

const router = express.Router();

// In-memory store for votes
let votes = {};

// POST /votes
router.post('/votes', (req, res) => {
    const { userId, itemId } = req.body;
    
    // Validate vote
    if (!userId || !itemId) {
        return res.status(400).json({ message: "User ID and Item ID are required." });
    }

    if (!votes[itemId]) {
        votes[itemId] = [];
    }

    // Check if the user already voted for this item
    if (votes[itemId].includes(userId)) {
        return res.status(409).json({ message: "User has already voted for this item." });
    }

    // Record the vote
    votes[itemId].push(userId);
    return res.status(201).json({ message: "Vote cast successfully." });
});

// GET /top-pushes
router.get('/top-pushes', (req, res) => {
    // Sort items by the number of votes
    const topPushes = Object.keys(votes)
        .map(itemId => ({ itemId, voteCount: votes[itemId].length }))
        .sort((a, b) => b.voteCount - a.voteCount)
        .slice(0, 10); // Return top 10

    return res.json(topPushes);
});

export default router;