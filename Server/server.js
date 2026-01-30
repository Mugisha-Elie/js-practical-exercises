import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {Pool} from 'pg'

dotenv.config();

const app = express();
const db_port = process.env.PORT;
const server_port = 3000;
const db_password = process.env.db_password

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: "localhost",
    database: "postgres",
    password: db_password,
    port: db_port,
})

pool.connect((error) => {
  if(error){
    console.log(error)
  }else{
    console.log("Database Connected successfully");
  }
})


app.get("/users", async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM userdetails ORDER BY id ASC')
        res.status(200).json(result.rows);
    }catch(error){
        res.status(500).json({error: error.message})
    }
})


app.post("/users", async (req, res) => {
    try{
        const {firstname, lastname, email, gender, age } = req.body;

        const newUser = await pool.query('INSERT INTO userdetails (firstname, lastname, email, gender, age) values ($1, $2, $3, $4, $5) RETURNING *', [firstname, lastname, email, gender, age]);

        res.status(201).json(newUser.rows[0]);
    }catch(error){
        res.status(500).json({error: error.message});
        // res.json(error.message)
    }
})


app.put("/users/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const {firstname, lastname, email, gender, age} = req.body;
        const updateUser = await pool.query('UPDATE userdetails SET firstname=$1, lastname=$2, email=$3, gender=$4, age=$5 WHERE id=$6 RETURNING *', [firstname, lastname, email, gender, age, id]);

        if(updateUser.rows.length === 0){
            return res.status(404).json("User not found");
        }

        res.json(updateUser.rows[0])
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

app.patch("/users/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const updates = req.body;
        const fields = Object.keys(updates);
        const values = Object.values(updates);

        const setString = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
        const query = `UPDATE userdetails SET ${setString} WHERE id = $${fields.length+1} RETURNING *`;
        
        const result = await pool.query(query, [...values, id]);

        res.json(result.rows[0]);
    }catch(error){
        console.log(error.message);
        res.status(500).json("Server Error");
    }
})

app.delete("/users/:id", async (req, res) => {
    const {id} = req.params;
    
    const deleteUser = await pool.query('DELETE * FROM userdetails WHERE id = $1', [id]);

    res.json({"message": "User deleted Successfully" });

    if(deleteUser.rows[0] === 0){
        return res.status(404).json("User not found");
    }
})

app.listen(server_port, () => {
    console.log(`Server Running on http://localhost:${server_port}`);
})
