const express = require('express');
const app = express();
const db = require("./db/db");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const userRoutes = require('./views/userRoutes')

app.use(express.json());

app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en marcha en el puerto ${PORT}`);
    
    db.authenticate()
    .then(() => {
        console.log("Connected to the database, sync is ok");
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
})
