import express, { Request, Response } from 'express';

const router = express.Router();

// In-memory storage for invites
const invites: { userId: string, inviteId: string, createdAt: string }[] = [];

// POST /invites - Create a new invite
router.post('/invites', (req: Request, res: Response) => {
    const userId = req.body.userId; // Get userId from request body
    if (!userId) {
        return res.status(400).json({ error: 'A userId is required to create an invite.' });
    }

    const inviteId = `invite-${invites.length + 1}`; // Simple invite ID generation
    const createdAt = new Date().toISOString(); // Current date in ISO string format

    invites.push({ userId, inviteId, createdAt });
    res.status(201).json({ inviteId, createdAt });
});

// GET /invites/:userId - Retrieve invites for a specific user
router.get('/invites/:userId', (req: Request, res: Response) => {
    const { userId } = req.params;
    const userInvites = invites.filter(invite => invite.userId === userId);

    res.status(200).json(userInvites);
});

export default router;