const mongoose = require('mongoose');

//const user_model=require('./user_model')



const ligneSchema =  mongoose.Schema({
    //user:{String},
    code : {String},
    qte : {Number},
    prix : {Number}
   })

  
module.exports = mongoose.model('lignes', ligneSchema);






