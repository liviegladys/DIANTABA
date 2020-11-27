const bcrypt=require('bcrypt');
const Admin=require('../models/admin');


module.exports={

signup (req, res, next)  {// inscription d' un admin
    
        const admin = new Admin({

          Mail:req.body.Mail,
          Password: req.body.Password
        });
        admin.save((error,admin)=>{
if (error){
res.sendStatus(500)
}else{
  res.sendStatus(201)
}

        })
     
  },
  
  
login (req, res, next)  {

        Admin.findOne({ Mail: req.body.Mail })// rechercher un admin par mail
          .then(async (admin) => {
            if (!admin) {
              return res.status(401).json({ error: 'administrateur non trouvé !' });
            }
            await bcrypt.compare(req.body.Password, admin.Password,(err,reponse)=>{// comparaison des mots de passe crypté et non crypté
                if (err){
                    res.send('erreur:'+err)// renvoyer l' erreur et la description de l'erreur
                }else if(!reponse){
                    res.sendStatus(401).json({error:'Mot de passe invalide' })// gestion des erreurs 
                }else{
                   
                    next()
                }

            })
              
          })
         
      }
    }