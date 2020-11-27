const mongoose= require('mongoose');
const Produit = require('../Models/produit_model');

        module.exports = {
            createProduit(req,res,next){
            const produit_model = new Produit({// schema de données
                           
    ProduitTitre: req.body.ProduitTitre,
    ProduitPic: req.body.ProduitPic,
    ProduitDescrip: req.body.ProduitDescrip,
    ProduitRegion:req.body.ProduitRegion,
    produitPrix: req.body.produitPrix,
    categorie:req.body.categorie
                
            });
            console.log(req.body)
            
            produit_model.save()
            .then(() => res.sendStatus(201).json({ message: 'produit créé !' }))
            .catch(error => res.sendStatus(400).json({ error }));
            },

            

        
        };



 
