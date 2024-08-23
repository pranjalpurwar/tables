const express = require("express");
const cors=require("cors");
const mysql =require("mysql");

const app= express();

app.use(cors());

const db= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: "",
    database: "tables"
})

app.get("/",(req, res)=>{
   const sql ="select*from employee";
   db.query(sql,(err, data) => {
    if(err) return res.json("error");
    return res.json(data);
   })
})


app.listen(8085, () =>{
    console.log("listing")
})