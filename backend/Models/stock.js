const mongoose = require('mongoose');



const stockSchema = mongoose.Schema({

    categorie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cat' }],
    produit:[{type:mongoose.Schema.Types.ObjectId,ref:'produit_model'}]

   

});

module.exports = mongoose.model('stock', stockSchema);