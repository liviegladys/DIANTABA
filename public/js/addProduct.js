const url="http://localhost:3060/api/ajoutProduit";



  document.querySelector('#formAddProduct').addEventListener('submit',(e)=>{
      e.preventDefault();
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
            
          
        },
        body: JSON.stringify({
          ProduitTitre: document.querySelector("#NomProduit").value,
          ProduitPic: document.querySelector("#photo").value,
          ProduitDescrip: document.querySelector("#DescriptionProd").value,
          ProduitRegion: document.querySelector("#Region").value,
          ProduitPrix: document.querySelector("#prix").value,
          categorie: document.querySelector("#Categorie").value 
        }),
      
      };
      fetch(url,config)
      .then(()=>{
        console.log('merci de me l envoyer en BD')
      })
     .catch((err)=>{
       console.error(err)
     })
   })
  




//'api/createProduct' c'est l url vers laquelle yao va envoyer tout le body du form via fetch