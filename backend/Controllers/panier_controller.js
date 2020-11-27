const mongoose= require('mongoose');
const Panier = require('../Models/panier');
const User = require('../models/user_model');

const getPanier=(req,res)=>{
  res.render('panier');
}

module.exports={
//     createPanier(req,res,next){
//         const panier = new Panier({// schema de données
                       
// code: req.body.code,
// qte: req.body.qte,
// prix: req.body.prix,    
//         });
//         console.log(req.body)
        
//         panier.save()
//         .then(() => res.sendStatus(201).json({ message: 'panier crée !' }))
//         .catch(error => res.sendStatus(400).json({ error }));
//         }
getPanier:getPanier
    
    };

Panier.find({}, function (err, liste) 
 {
   if (err)  console.log(err);
   const lignes = liste;
 });

const chargerPanier = function(user)
{
    const monPanier = new Panier();
 const longueur = lignes.length;
 for(var i = 0; i < longueur ; i++)
 {
   if(lignes[i].user == user)
     monPanier.ajouterArticle(lignes[i].code, lignes[i].qte, lignes[i].prix);
 }
}

User.find({}, function (err, liste) 
{
 if (err)  console.log(err);
 users = liste;    
});

const checkLogin = function(login, mdp)
{
 for (var i = 0; i < users.length; i++) 
 {
   if (users[i].Mail == login && users[i].password == mdp)
     return (users[i]);
 }
}



