const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const sercetCode = "qhdsddhqGLADYSd;sjkjhfdfbhdf";

module.exports = {

  signup(req, res, next) {
   const regExpPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
    const user = new User({
      Nom: req.body.Nom,
      Prenom: req.body.Prenom,
      Mail: req.body.Mail,
      Password: req.body.Password,
      statut: req.body.statut,

    });

    user.save((error, user) => {
      if (error) {
        res.send(`Utilisateur non créé. Tous les champs doivent être complétés et  ${req.body.Mail} ne doit pas correspondre à compte existant`)
      } else {
        console.log('compte créé avec succès');
      }

    })
  },
  findAndLog(req, res) {
    console.log(req.body)
    User.findOne({ Mail: req.body.Mail }).then((user) => {
      console.log('verification',user)
      if (user !== null) {
        bcrypt.compare(req.body.Password, user.Password, (function (error, same) {
          if (same ) {
            const token = jwt.sign(
              {
                email: user.Mail,
                userId: user._id
              },
              sercetCode,
              {
                expiresIn: "24h"
              }
            );
            console.log(user)
            res.status(200).json({
              "user": user,
              "token":token
            });
          }
          else {
            console.log("err");
            res.send(error)
          }
        }))
      } else {
        console.log("f err");
        res.sendStatus(401).send('Utilisateur non reconnu')
      }
    });
    
  },
  home(req,res){
res.render('index')
  },
  
  getUsers(req, res) {// chercher  tous les utilisateurs et les envoie 
    User.find()
      .then(users => {
        res.send(users)
      })
  },

  deleteuser(req,res){
    User.findOneAndRemove({ email: req.body.email}).then(()=>{
        console.log("delete");
    })
  }
}