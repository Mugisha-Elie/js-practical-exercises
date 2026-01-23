import express from 'express';
import cors from 'cors';
import dotenv  from 'dotenv';
import {Pool} from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT
const password = process.env.PASSWORD

app.use(cors());
app.use(express.json());


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: password,
    port: port
})

app.post('/users', async (req, res) => {
   try{
     const {firstname, lastname, email, gender} = req.body

        const newUser = await pool.query("insert into users (firstname, lastname, email, gender) values ($1,$2,$3,$4) returning *", [firstname, lastname, email, gender])

        res.json(newUser.rows[0]);
   }catch(error){
        console.error(error.message);
        res.status(500).send("Server Error")
   }
})



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})