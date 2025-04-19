import { S3Client } from '@aws-sdk/client-s3'
import { config } from 'dotenv';
config();

export const s3 = new S3Client({
    region: 'auto',
    endpoint: process.env.R2_ENDPOINT,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY!,
        secretAccessKey: process.env.R2_SECRET_KEY!
    }
});

