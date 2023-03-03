const express = require('express');
const app = express();
const db = require("./db/db");
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const router = require('./router');

app.use(express.json());
app.use(router);


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
    
    db.authenticate()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
})
