const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get('/',(req, res)=>{
    //Host, user, password database
    const connection = mysql.createConnection({})
    connection.query('SELECT `name` FROM pokemon',(error,results)=>{});
});

app.get('/pokemon/:name/', (req,res)=>{});

app.get('/pokedexnumber/:name/', (req,res)=>{});

app.listen(port, () =>{
    console.log(`Application is now running on port ${port}`);
});