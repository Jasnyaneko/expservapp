const form = document.querySelector("#iciform")

form.addEventListener("submit",(event)=>{
    event.preventDefault() ;
    const formdat = new FormData(form)
     username = formdat.get("username")
     console.log(username)
        atid = username.lastIndexOf("@")
        console.log(atid)
        pointid = username.lastIndexOf(".")
        console.log(pointid)
        console.log(username.length)
        if (pointid > atid + 1 && pointid < username.length){ let formobject = {}
    formdat.forEach((value,keys)=>{
        formobject[keys] = value
    })
    recup(formobject)
    }
else{console.log("wrong")}}) ;

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
        console.log("non")
    }
}

