const express = require('express');
const app = express();
const PORT= 3030;
const rutaMain= require('./src/routes/main');
const rutaProduct= require('./src/routes/product');
const path = require("path")
app.use(express.json);
app.use(express.static(path.resolve(__dirname,'public')));


app.set("view engine", "ejs");
app.set('views','./src/views');


app.listen(PORT, ()=>{
    console.log('Servidor funcionando');
    });

app.use(rutaMain);
app.use('/product',rutaProduct);