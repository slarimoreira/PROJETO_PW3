const express = require('express');
const notasController = require('./controller/NotasController');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", notasController);

app.listen(3000, () =>{console.log("App rodando!");});

