import express from 'express';
import { PrismaClient } from '@prisma/client';

const router: express.Router = express.Router();
const prisma = new PrismaClient();

router.get('/files/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const files = await prisma.file.findMany({
            where: { uploaderId: userId}
        });
        res.json(files);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Failed to fetch files.'});
    }
});

export default router;