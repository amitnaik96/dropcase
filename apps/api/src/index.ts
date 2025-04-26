import express from 'express';
import uploadRouter from './routes/uploadRouter'; 
import authRouter from './routes/authRouter'; 
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v1', uploadRouter);
app.use('/api/v1', authRouter);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});