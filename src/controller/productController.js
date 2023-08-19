const data = require('../models/productos.json')

module.exports = {
    detail: (req,res)=>{
        const {results}= data;
        const  {id} = req.params;

        const dataProd = results.find((prod)=> prod.id === id);

        res.render('detalleMenu',{
            prod:dataProd
        });
        res.render('detalleMenu')
    }

    }