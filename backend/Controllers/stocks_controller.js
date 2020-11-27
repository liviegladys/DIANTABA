const mongoose= require('mongoose');
const Stock = require('../Models/stock');

        module.exports = {
            createStock(req,res,next){
            const stock = new Stock({// schema de données
                           
            produit:req.body.produit,
            categorie:req.body.categorie
                
            });
            console.log(req.body)
            
            stock.save()
            .then(() => res.sendStatus(201).json({ message: 'stock !' }))
            .catch(error => res.sendStatus(400).json({ error }));
            }
        
        };



 
