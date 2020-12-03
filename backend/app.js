const express = require('express');
const bodyParser= require('body-parser')// permet de découper la requete qu on reçoit en front
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const fs = require('fs');
const produit_model=require('../backend/Models/produit_model')
app.use(express.static("public"))

const routRoutes=require('./routes/rout');
const { Console } = require('console');

app.set('view engine','ejs')// declare que le moteur de rendu c' est ejs et ceci se met avant toute route
app.use(express.static('views/pages'))// les fichiers.ejs vont etre recuperer dans le dossier views
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.use('/api', routRoutes);
  
  // app.get('/', function(req, res) {
  //   res.render('pages/index')});

  //  app.get('/connexion', function(req, res) {
  //     res.render('pages/connexion')});


       
  //       app.get('/particulier', function(req, res) {
  //         res.render('pages/particulier')}); 

          // app.get('/product', function(req, res) {
          //   res.render('pages/product')}); 

          //  app.get('/product', async function(req, res) {
            
           //avant le rendu faire la connexion avec la BDD

           //requete pour selectionner tous les produits ET LA STOCKEr DANS UNE VARIABLE

            // const products= await produit_model.find({}).exec();
            // console.log(products)

// .then(() => res.sendStatus(201).render("page/product",{ message: 'voici tous vos produits' }))
// .catch(error => res.sendStatus(400).json({ error }));

           //gestion des erreurs...

           //stocker le resultat de la requete dans une variable
          //  const products=[
          //    {
          //     ProduitTitre:"pomme",
          //     ProduitPic:"pomme.jpeg",
          //     ProduitDescrip:"bonne pour le cerveau",
          //     ProduitRegion:"centre",
          //     produitPrix: 4,
          //     categorie: "5fbb8d9de158c52e2013bdcd"
          //    },
          //    {
          //     ProduitTitre:"poire",
          //     ProduitPic:"poire.jpeg",
          //     ProduitDescrip:"bon pour la peau",
          //     ProduitRegion:"haut de france",
          //     ProduitPrix: 9,
          //     categorie: "5fbb8d9de158c52e2013bdcd"
          //    }
          //  ]
           // passer cette variable dans le render 
            
            
            
            // res.render('pages/product',{
            //   products:products,// passer une variable dansle rendu de page
            //   message:"coucou"
            //  })
            // }); 

             
            app.get('/ajoutProduit', function(req, res) {
              res.render('pages/ajoutProduit')}); 

              



  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/auth', routRoutes);


 
  module.exports = app;  