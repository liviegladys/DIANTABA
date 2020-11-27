const mongoose = require('mongoose');



const ProduitSchema = mongoose.Schema({

    ProduitTitre: { type: String, },
    ProduitPic: { type: String, },
    ProduitDescrip: { type: String, },
    ProduitRegion: { type: String, },
    produitPrix: { type: Number },
    categorie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cat' }],

   

});

module.exports = mongoose.model('Produit_model', ProduitSchema);