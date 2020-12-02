const mongoose = require('mongoose');
const path = require('path');
const express= require('express')
const app = express();
const bodyParser= require('body-parser')
const addProduct=require('../js/addProduct')
const ajoutProduit=require('../../views/pages/ajoutProduit')




app.get("/pages/product", (req, res) => {
    const product = {
      Product: "product",
      
    };
    res.render("product", { product: product });
  });


// app.post('/ajoutProduit', function(req, res) {
//     res.sendFile( __dirname  + '/ajoutProduit');
//   });
  

//  const ajoutProduit=[]
//  app.use(bodyParser.urlencoded({extended:false}));

// app.post('/ajoutProduit', function(req, res) {
//     ajoutProduit.push({NomProduit:req.body.NomProduit,
//       DescriptionProd:req.body.DescriptionProd,
//       Magasin:req.body.Magasin,
//       photo:req.body.photo,
//       prix:req.body.prix,
//       prixCasse:req.body.prixCasse
//     })
//   res.redirect('pages/ajoutProduit')});



//console.log("coucou depuis le front")
