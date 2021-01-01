const express = require('express');// passer par express
const router = express.Router();
const auth = require('../middleware/auth'); // passer par le middleware pour s' authentifier
const multer=require('../middleware/multer_config')
const userCtrl = require('../Controllers/user_Controller');
const categorieProduitCtrl= require('../Controllers/categorieProduit_controller')
const produitCtrl=require('../Controllers/produit_controller')
const panierCtrl=require('../Controllers/panier_controller')

router.post('/signup', userCtrl.signup);
// router.post('/findAndLog', userCtrl.findAndLog);
// router.get('/getUsers',userCtrl.getUsers),
// router.post('/delete', userCtrl.deleteuser);
// router.get('/',userCtrl.home)
router.get('/findAll', userCtrl.findAll);
router.get('/findOne/:id', userCtrl.findOne);
router.put('/update/:id', userCtrl.update);
router.post('/delete/:id', userCtrl.delete);

router.post('/create',categorieProduitCtrl.create)
router.post('/createProduct',produitCtrl.createProduit)
router.get('/getAllProducts',produitCtrl.getAllProducts)


router.get('/inscriptionParticulier', function(req, res) {
        res.render('pages/inscriptionParticulier')});

router.get('/connexion', function(req, res) {
        res.render('pages/connexion')});

router.get('/index', function(req, res) {
        res.render('pages/index')});

router.get('/ajoutProduit', function(req, res) {
        res.render('pages/ajoutProduit')});
router.post('/ajoutProduit',produitCtrl.createProduit)

router.get('/modifierProduit', function(req, res) {
        res.render('pages/modifierProduit')});

router.post('/modifierProduit',produitCtrl.modifyProduit)

router.get('/deleteProduit', function(req, res) {
        res.render('pages/deleteProduit')});


 router.get('/particulier', function(req, res) {
        res.render('pages/particulier')}); 

router.get('/product',produitCtrl.getAllProducts)




// router.post('/createPanier',panierCtrl.createPanier)


//router.get('/',userCtrl.connexion)
// const adminCtrl=require('../controllers/admin_controller')
// const lstAnswerIdentiteCtrl=require('../controllers/lstAnswerIdentite_controller')
// const lstAnswerCtrl=require('../controllers/lstAnswer_controller')

// router.post('/signupadmin',  adminCtrl.signup  );
// router.get('/loginadmin',  adminCtrl.login,UserCtrl.getUsers);// le middleware est le login
// router.get('/readQst',QstCtrl.readQst)

module.exports = router;