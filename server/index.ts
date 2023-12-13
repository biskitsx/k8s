import express from 'express';
import mongoose from 'mongoose';
import { createPostRouter } from './router/post';

async function createDatabase() {
    try {
        const db = await mongoose.connect('mongodb://mongo:27017/k8s');
        console.log('Database connected');
    } catch (error) {
        console.log(error);
    }
}


function createServer() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    return app;
}

function main() {
    const app = createServer();
    const postRouter = createPostRouter();
    createDatabase();
    app.use('/posts', postRouter);
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}

main()


