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
                ProduitPrix: req.body.produitPrix,
                categorie:req.body.categorie
                
            });
            console.log(req.body)
            
            produit_model.save((err,produit)=>{
              if(err){
                res.sendStatus(400)
              }else{
                res.sendStatus(201,{message:"ok"})
              }

            })
           
            },
            async getAllProducts(req,res, next) {
                const products= await produit_model.find({}).exec();
                console.log(products)

                res.render('pages/product',{
                        products:products,// passer une variable dansle rendu de page
                        message:"coucou"
                       })
               
              } ,

              modifyProduit (req, res, next) {
                if (!req.body) {
                        return res.status(400).send({
                        message: "prouduit doit existé"
                        });
                         }
                        
                const id=req.params.id

                produit_model.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
                        .then(product => {
                          if (!product) {
                            res.status(404).send({
                                message: `peut pas modifier product par id=${id}. peut etre product n'existe pas!`
                                    });
                        } else res.send({ message: "product a été bien modifié." });
                                })
                                .catch(err => {
                                  res.status(500).send({
                                    message: "Erreur modifier product id=" + id
                                  });
                                });
                
                } ,
 
                  deleteProduit  (req, res, next)  {
                        produit_model.findOne({ _id: req.params.id })
                          .then(product => {
                            const filename = product.imageUrl.split('/images/')[1];
                            fs.unlink(`images/${filename}`, () => {
                              produit_model.deleteOne({ _id: req.params.id })
                                .then(() => res.status(200).json({ message: 'Produit supprimé !'}))
                                .catch(error => res.status(400).json({ error }));
                            });
                          })
                          .catch(error => res.status(500).json({ error }));
                      },
                
            
        
        };



 
