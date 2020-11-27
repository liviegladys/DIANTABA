const express = require('express');
const bodyParser= require('body-parser')
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const fs = require('fs');


const routRoutes=require('./routes/rout');

mongoose.connect('mongodb+srv://DIANTABA:simplon2020@cluster0.5wnmq.mongodb.net/DIANTABA?retryWrites=true&w=majority',// connexion à la base de donnée
  { useNewUrlParser: true,
    useUnifiedTopology: true })
 
    mongoose.connection.once('open',()=>{
        console.log('connexion établie')
    })
.on('error',(error)=>{
    console.log('connexion echouée' + error)
})

app.set('view engine','ejs')// declare que le moteur de rendu c' est ejs et ceci se met avant toute route
app.use(express.static('views/pages'))// les fichiers.ejs vont etre recuperer dans le dossier views

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

  app.use('/api', routRoutes);
  
  app.get('/', function(req, res) {
    res.render('pages/index')});

   app.get('/connexion', function(req, res) {
      res.render('pages/connexion')});


      app.get('/inscription', function(req, res) {
        res.render('pages/inscription')}); 

        app.get('/profile', function(req, res) {
          res.render('pages/profile')}); 



  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/auth', routRoutes);


 
  module.exports = app;
  