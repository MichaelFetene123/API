import express from "express";
const app = express();


app.get('/', (req, res) => {
    console.log('hi express server');
    res.status(200).json({ message: 'Hello' });
});

export default app;