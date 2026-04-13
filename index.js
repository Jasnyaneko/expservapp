const form = document.querySelector("#iciform")

form.addEventListener("submit",(event)=>{
    event.preventDefault() ;
    const formdat = new FormData(form)
    let formobject = {}
    formdat.forEach((value,keys)=>{
        formobject[keys] = value
    })
    /*console.log(formdat.get("ogridou"))*/
    recup(formobject)
})
const gib = ()=> {console.log(abo())}
const abo = ()=> {console.log(gib())}
async function recup (json){
    try{
        const resp = await fetch("http://localhost:3000/",{
            method: "POST" ,
            headers: {
                "accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(json)
        });
        data = await resp.json()
        console.log(data)
    }
    catch{(e)=>console.error(e);
        console.log("aabaa")
    }
}

