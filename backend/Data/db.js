const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://DIANTABA:simplon2020@cluster0.5wnmq.mongodb.net/DIANTABA?retryWrites=true&w=majority',// connexion à la base de donnée
  { useNewUrlParser: true,
    useUnifiedTopology: true })
 
    mongoose.connection.once('open',()=>{
        console.log('connexion établie')
    })
.on('error',(error)=>{
    console.log('connexion echouée' + error)
})