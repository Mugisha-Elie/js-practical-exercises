import express from 'express';
import cors from 'cors';

const app = express();
const port =  3000;

app.use(cors());
app.use(express.json());

app.post("/api/data", (req, res) => {
    const recievedData = req.body;

    console.log("Recieved data from user", recievedData);

    res.json({
        message: "Data Recieved",
        data: recievedData
    })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})