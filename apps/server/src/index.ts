import express from 'express';
import multer from 'multer';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from './utils/r2'
import { config } from 'dotenv';
config();

const app = express();

const upload = multer({ storage: multer.memoryStorage() });
const BUCKET_NAME = process.env.R2_BUCKET_NAME;

app.post('/upload', upload.single('file'), async (req, res) => {
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

        res.status(201).json({
            message: 'File uploaded successfully',
            fileUrl
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'internal server error'
        });
    }
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});