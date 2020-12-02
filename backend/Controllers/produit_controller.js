const mongoose= require('mongoose');
const Produit = require('../Models/produit_model');
const produit_model=require('../Models/produit_model')
const data=require('../Data/db')

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
            async getAllProducts(req,res, next) {
                const products= await produit_model.find({}).exec();
                console.log(products)

                res.render('pages/product',{
                        products:products,// passer une variable dansle rendu de page
                        message:"coucou"
                       })
               
              } 
        
        };



 
