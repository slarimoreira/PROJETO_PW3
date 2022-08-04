const express = require('express');
const categoriaController = require('./controller/CategoriaController');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", categoriaController);

app.listen(8089, () =>{console.log("App rodando!");});