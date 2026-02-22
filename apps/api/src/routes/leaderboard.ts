import express from 'express';
import { getLeaderboard, updateLeaderboard } from '../controllers/leaderboardController';

const router = express.Router();

// GET endpoint for fetching the leaderboard
router.get('/', getLeaderboard);

// POST endpoint for updating the leaderboard
router.post('/', updateLeaderboard);

export default router;