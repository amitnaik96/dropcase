import express from 'express';
import multer from 'multer';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '../utils/r2'
import { PrismaClient } from '@prisma/client'; 
import { config } from 'dotenv';
config();

const upload = multer({ storage: multer.memoryStorage() });
const BUCKET_NAME = process.env.R2_BUCKET_NAME;
const prisma = new PrismaClient();

const router: express.Router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;

    if(!file) {
        res.status(400).json({
            message: 'No file uploaded'
        });
        return;
    }

    try { 
        const uniqueFileName= `${Date.now()}-${file.originalname}`;
        const params = {
            Bucket: BUCKET_NAME,
            Key: uniqueFileName,
            Body: file.buffer,
            ContentType: file.mimetype
        };

        const command = new PutObjectCommand(params);
        
        await s3.send(command);

        const fileUrl = `${process.env.R2_DEV_ENDPOINT}/${uniqueFileName}`;

        const savedFile = await prisma.file.create({
            data: {
                fileName: file.originalname,
                fileUrl
            }
        });

        res.status(201).json({
            message: 'File uploaded successfully',
            file: savedFile
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'internal server error'
        });
    }
});

export default router;