import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import chatRoutes from './routes/chatRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;

export default app;