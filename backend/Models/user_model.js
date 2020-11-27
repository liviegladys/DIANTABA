const mongoose = require('mongoose'); //faire appel à mongoose
const bcrypt= require('bcrypt');
//const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({// schema de données
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Mail: { type: String, required: true },
    Password:{type:String},
    Statut:{type:String,enum:['particulier','professionnel']},
    
});

userSchema.pre('save',async function(next){
    try{
       
        const salt=await bcrypt.genSalt(10);// augmenter les options du cryptage 
        const hash=await bcrypt.hash(this.Password,salt);//cryptage de mot de passe
        this.Password= hash; 
        if(!this.Password==this.ConfirmPassword){
            console.log('dont macth')       
         }else{
             console.log('ok')
         }
     next()

    }catch(error){
        next(error);
    }
})
//userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user_model', userSchema);// exporter le schema de donnée dans mongoose

