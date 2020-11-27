const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const categorieProduitSchema = mongoose.Schema({
   
    TitreCate:{
        type:String,
        enum:["Fruits et Legumes","Produit laitiers","Poisson et viande","Partisserie"]
    },
    TitreSousCaté:{type:String},
    photoSousCaté: {type:String },
    
},

{collection: "CAT_COLLEC"});

const Cat = mongoose.model('cat',categorieProduitSchema);


module.exports = Cat;