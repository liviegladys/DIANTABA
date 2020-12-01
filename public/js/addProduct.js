

const URL="http://localhost:3060/ajoutProduit";

const ajout=()=>{
  console.log(document.querySelector(''))
    document.getElementById("submit").addEventListener('click',()=>{
        let form = document.getElementById("ajoutProduit");

        let formData = new FormData(form);
        const config = {
            method: 'POST',
            headers: {
            "Access-Control-Allow-Origin":"http://localhost:3060/ajoutProduit"
        },
        body: formData,
    }
    fetch(URL, config)
    .then(response => response.json().then((response)=>{
        if(response=="OK" )
        {
            document.location.href="../../Views/pages/ajoutProduit"
        }
        else{
            console.log(response)
        }
    })

    )
})
}

export default ajout



//'api/createProduct' c'est l url vers laquelle yao va envoyer tout le body du form via fetch