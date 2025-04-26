import express from 'express';
import {PrismaClient } from '@prisma/client';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const router: express.Router = express.Router();
const prisma = new PrismaClient();

const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})

router.post('/signup', async (req, res) => {
    try {
        const parsedBody = authSchema.safeParse(req.body);
        if(!parsedBody.success) {
            res.status(411).json({
                message: "invalid inputs!"
            });
            return;
        }
        
        const { name, email, password} = parsedBody.data;

        // hashing password
        const hashedPassword = await bcrypt.hash(password, 10);


        await prisma.user.create({
            data: {
                name, 
                email, 
                password: hashedPassword
            }
        });

        res.json({
            message: "user signed up successfully!"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err
        });
    }
});

export default router;