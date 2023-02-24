const express = require('express');
const app = express();
const db = require("./db/db")

const PORT = 3000;

app.use(express.json());

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
