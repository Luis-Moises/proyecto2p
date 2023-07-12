const express = require("express")
const navegadorRuta = express.Router()

//Declaramos un objeto de nuestro modelo//
let Navegador = require('../models/Navegador')

//Agregar un nuevo navegador
navegadorRuta.route('/create').post((req,res)=>{
    Navegador.create(req.body)
    .then((data)=>{
        console.log('se inserto un registro')
        res.send(data)
    })
    .catch((err)=>{
        console.error.apply(err)
    })
})

//Obtenemos todos los navegadores//
navegadorRuta.route('/navegadores').get((req,res)=>{
    Navegador.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Obtenemos un solo navegador por su id//
navegadorRuta.route('/navegador/:id').get((req,res)=>{
    Navegador.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Actualizar un navegador//
navegadorRuta.route('/update/:id').put((req,res)=>{
    Navegador.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Metodo para eliminar navegador//
navegadorRuta.route('/delete/:id').delete((req,res)=>{
    Navegador.findByIdAndRemove(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

module.exports =navegadorRuta;
