const express = require('express');
const app = express();
const db = require("./db/db");
require('dotenv').config();
const cors = require ("cors");
const PORT = process.env.PORT || 3000;
const router = require('./router');

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

app.use(express.json());
app.use(cors(corsOptions));
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
