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

  findAll(req, res, next) {
    // const ProduitTitre = req.query.ProduitTitre;
    // var condition = ProduitTitre ? { ProduitTitre: { $regex: new RegExp(ProduitTitre), $options: "i" } } : {};
  
    User.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "il y a eu des erreurs lors de la recherche des utilisateurs."
        });
      });
  },
  
  // Find a single Tutorial with an id
  findOne(req, res, next) {
    const id = req.params.id;
  
    User.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Ne trouve pas l'utilisateur avec l' ID " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  },
  
  // Update a Tutorial by the id in the request
  update(req, res, next) {
    if (!req.body) {
      return res.status(400).send({
        message: "l' utilisateur à mettre à jpour ne peut etre vide!"
      });
    }
  
    const id = req.params.id;
  
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })//chercher un produit 
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Ne peut mettre à jour avec l'id=${id}. peut etre l' utilisateur ne peut etre trouvé!`
          });
        } else res.send({ message: "Mise à jour de l' utilisateur a réussi." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating user with id=" + id
        });
      });
  },
  
  // Delete a Tutorial with the specified id in the request
  delete(req, res, next) {
    const id = req.params.id;
  
    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete user with id=${id}. Maybe user was not found!`
          });
        } else {
          res.send({
            message: "user was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  }
  // Delete all Tutorials from the database.
  
  
  
  

  
//   findAndLog(req, res) {
//     console.log(req.body)
//     User.findOne({ Mail: req.body.Mail }).then((user) => {
//       console.log('verification',user)
//       if (user !== null) {
//         bcrypt.compare(req.body.Password, user.Password, (function (error, same) {
//           if (same ) {
//             const token = jwt.sign(
//               {
//                 email: user.Mail,
//                 userId: user._id
//               },
//               sercetCode,
//               {
//                 expiresIn: "24h"
//               }
//             );
//             console.log(user)
//             res.status(200).json({
//               "user": user,
//               "token":token
//             });
//           }
//           else {
//             console.log("err");
//             res.send(error)
//           }
//         }))
//       } else {
//         console.log("f err");
//         res.sendStatus(401).send('Utilisateur non reconnu')
//       }
//     });
    
//   },
//   home(req,res){
// res.render('index')
//   },
  
//   getUsers(req, res) {// chercher  tous les utilisateurs et les envoie 
//     User.find()
//       .then(users => {
//         res.send(users)
//       })
//   },

//   deleteuser(req,res){
//     User.findOneAndRemove({ email: req.body.email}).then(()=>{
//         console.log("delete");
//     })
//   }


// quelques fonctions  utiles en javascript
// .forEach
// const arr=[1,2,3,4]
// arr.forEach((item,index)=>console.log(item))


// .filter
// const users=[
//{name:"john",age:18 ans}
//{name:"jane",age:20 ans}
//]
// const adults= users.filter(user=>user.age>18)
// console.log(names)

// .reduce
// const users=[
//{name:"john",age:18 ans}
//{name:"jane",age:20 ans}
//]
// const totalAge= users.reduce((age,user)=>age+user.age,0)
// console.log(totalAge)


}