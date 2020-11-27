const mongoose = require('mongoose'); 
const bcrypt= require('bcrypt');

const adminSchema = mongoose.Schema({
    Mail: { type: String, required: true },
    Password:{type:String, required:true}
    
});

adminSchema.pre('save',async function(next){
    try{
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(this.Password,salt);
        this.Password= hash;
     next()

    }catch(error){
        next(error);
    }
})
module.exports = mongoose.model('admin', adminSchema);// exporter le schema de donnée dans mongoose


