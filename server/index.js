import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import coonectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


app.get('/', async(req,res) => {
    res.send('hello from dall-e');
})


const startServer = async () => {
    try {
        coonectDB(process.env.MONGODB_URL);
        app.listen(5000, () =>  console.log('Server has started on port http://localhost:5000'))
    } catch (error) { 
        console.log(error);

    }
}

startServer();