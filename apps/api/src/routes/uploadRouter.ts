import express from 'express';
import multer from 'multer';
import { PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '../utils/r2'
import { PrismaClient } from '@prisma/client'; 
import { config } from 'dotenv';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
config();

const upload = multer({ storage: multer.memoryStorage() });
const BUCKET_NAME = process.env.R2_BUCKET_NAME;
const prisma = new PrismaClient();

const router: express.Router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file;
    const userId = req.body.userId;

    if(!file || !userId) {
        res.status(400).json({
            message: 'No file or userId provided'
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

        const getObjectCommand = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: uniqueFileName,
            ResponseContentDisposition: `attachment; filename="${file.originalname}"`, // forces download
        });

        // presignedUrl: allows download in cors.
        const presignedUrl = await getSignedUrl(s3, getObjectCommand);
        // const fileUrl = `${process.env.R2_DEV_ENDPOINT}/${uniqueFileName}`;
        

        const savedFile = await prisma.file.create({
            data: {
                fileName: file.originalname,
                fileUrl: presignedUrl, 
                uploaderId: userId,
                fileSize: file.size
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