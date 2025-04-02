import express from 'express';
import Router from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(Router());

app.listen(4000, () => {
    console.log("Server is running on port", 4000);
});