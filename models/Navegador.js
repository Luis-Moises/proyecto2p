const mongoose =require ('mongoose')
const Schema = mongoose.Schema
let Navegador =new Schema({
    nombre: {type:String},
    cromium:{type:String},
    ano_salida:{type:Number},
    cuota_mercado:{type:Number}
},{
    collection: 'navegadores'
})


module.exports = mongoose.model('Navegador',Navegador)


