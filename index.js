const form = document.querySelector("#iciform")
const mail = document.querySelector("#icimail")


mail.addEventListener("input",(event)=>{
    console.log("key")
    let validemail = null
    username = mail.value
    console.log(username.length)
    console.log(username.lastIndexOf(".")
    )
    if( username.lastIndexOf(".") > username.lastIndexOf("@") + 1 && username.lastIndexOf(".") != username.length - 2 && username.lastIndexOf("@") != 0){
        mail.style.color= "green" ;  validemail = true }
    else{mail.style.color = "red" ; validemail = false}
})


form.addEventListener("submit",(event)=>{
    event.preventDefault() ;
    const formdat = new FormData(form)
     username = formdat.get("username")
        if (username.lastIndexOf(".") > username.lastIndexOf("@") + 1 && username.lastIndexOf(".") < username.length + 1){
             let formobject = {}
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

