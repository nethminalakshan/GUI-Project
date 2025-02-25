


const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app=express();
app.use(cors());


const db=mysql.createConnection({
      host:'bkmxso2suopnpe64tmya-mysql.services.clever-cloud.com',
      user:'usjalwxjyu4izuby',
      password:'rGms6qkggzV3SOXuIx4Q',
      database:'bkmxso2suopnpe64tmya'

})

    
app.listen(3001,()=>{
    console.log("running on port 3001");
})

app.post('/signup',(req,res)=>{

    const sql="INSERT INTO login ('name','email','password') VALUES (?)";
    const values=[req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("error");
        }
        return res.json("data");
    })
})