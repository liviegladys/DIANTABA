const express = require('express');// passer par express
const router = express.Router();
const auth = require('../middleware/auth'); // passer par le middleware pour s' authentifier
const multer=require('../middleware/multer_config')
const userCtrl = require('../Controllers/user_Controller');
const categorieProduitCtrl= require('../Controllers/categorieProduit_controller')
const produitCtrl=require('../Controllers/prouduit_controller')
const panierCtrl=require('../Controllers/panier_controller')

router.post('/signup', userCtrl.signup);
router.post('/findAndLog', userCtrl.findAndLog);
router.get('/getUsers',userCtrl.getUsers),
router.post('/delete', userCtrl.deleteuser);
router.get('/',userCtrl.home)

router.post('/create',categorieProduitCtrl.create)
router.post('/createProduct',produitCtrl.createProduit)

// router.post('/createPanier',panierCtrl.createPanier)


//router.get('/',userCtrl.connexion)
// const adminCtrl=require('../controllers/admin_controller')
// const lstAnswerIdentiteCtrl=require('../controllers/lstAnswerIdentite_controller')
// const lstAnswerCtrl=require('../controllers/lstAnswer_controller')

// router.post('/signupadmin',  adminCtrl.signup  );
// router.get('/loginadmin',  adminCtrl.login,UserCtrl.getUsers);// le middleware est le login
// router.get('/readQst',QstCtrl.readQst)

module.exports = router;