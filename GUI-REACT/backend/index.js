import express from 'express';
import mysql from 'mysql';


const app = express();


//----------------------------------------------------
const dbConfig = {
    host: 'bkmxso2suopnpe64tmya-mysql.services.clever-cloud.com',
    user: 'usjalwxjyu4izuby',
    password: 'rGms6qkggzV3SOXuIx4Q',  
    database: 'bkmxso2suopnpe64tmya',
}

const connection= mysql.createConnection(dbConfig);

connection.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});
//-------------------------------------------------

app.get('/', (req, res) => {  
    res.send('Hello World');
})