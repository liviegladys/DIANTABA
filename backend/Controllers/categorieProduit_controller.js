//const Cat = require('../Models/categorieProduit_model');
const bodyParser = require('body-parser');
const { AddCategorieProduit } = require('../Controllers/prouduit_controller');
const Cat = require('../Models/categorieProduit_model');



module.exports = {
     readBall(req,res) {
        Cat.find().then( (cate) =>
            res.send(cate)
        )
    }, 
    create(req,res){
        const categorieProduitObject = JSON.parse(req.body.categorieProduit);
       console.log(categorieProduitObject);
        const cat=new Cat({
    TitreCate:req.body.TitreCate,
    photoCaté:req.body.photoCaté,
    TitreSousCaté:req.body.TitreSousCaté,
    produit:req.body.produit,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    })
    cat.save(); 
    },

    test(req,res){
        Cat.findOne({TitreCate:"fruits et legumes"}).then((cate)=>{
            console.log(req.body);
            res.send(cate);
        })
    },
    
    // modifycategorieProduit (req, res, next) {
    //     const categorieProduitObject = req.file ?
    //     {
    //       ...JSON.parse(req.body.categorieProduit),
    //       imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    //     } : { ...req.body };
    
    //       Cat.updateOne({ _id: req.params.id }, { ...categorieProduitObject, _id: req.params.id })
    //           .then(() => res.status(200).json({ message: 'categorie modifié !'}))
    //           .catch(error => res.status(400).json({ error }));
    //       },
    
          deletecategorieProduit  (req, res, next)  {
            Cat.findOne({ _id: req.params.id })
              .then(categorieProduit => {
                const filename = categorieProduit.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                  Cat.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'categorie supprimé !'}))
                    .catch(error => res.status(400).json({ error }));
                });
              })
              .catch(error => res.status(500).json({ error }));
          },
    
     getOnecategorieProduit(req, res, next) {
       Cat.findOne({ _id: req.params.id })
          .then(categorieProduits => res.status(200).json(categorieProduits))
          .catch(error => res.status(404).json({ error }))
      },
    getAllcategorieProduit(req, res, next) {
        Cat.find()
          .then(categorieProduits => res.status(200).json(categorieProduits))
          .catch(error => res.status(400).json({ error }));
      }
}