const data = require('../models/productos.json')

module.exports = {
    index: (req,res)=>{
        const dataProd = data.results;
        res.render('index',{
            prod: dataProd
        });
        // res.render('index')
    }
    }