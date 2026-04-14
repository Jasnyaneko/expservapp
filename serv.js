const express = require("express")
const app = express()
const fs = require("fs")
const cors = require("cors")
app.use(express.json())

app.use(cors(origin="null"))

const awago = [
    {id: 1,ogi:"aaa"},
    {id: 2,ogi:"bbb"},
    {id: 3,ogi:"ccc"},
    {id: 4 ,ogi:"ddd"},
    {id: 5, ogi:"eee"}]


const readf = (req,res)=>{
    if(req.body.newu){
    let nuser = req.body
    fs.open("./ooo.txt","r",(err,fd)=>{
        if(err){console.log(err)}
        else{fs.readFile(fd,"utf8",(err,data)=>{
            if(err){console.log(err)}
            else{console.log(data)}
        })}
    })
    fs.readFile("./ooo.txt","utf8",(err,data)=>{
        if(err){console.log(err)}
        else{if(data != JSON.stringify(nuser)){fs.open("./ooo.txt","w",(err,fd)=>{
        if(err){console.log(err)}
        else{fs.writeFile(fd,JSON.stringify(nuser),"utf8",(err,data)=>{
            if(err){console.log(err)}
            else{console.log(data)}
            })}
    })}
    else{res.send(["already exists"])}
}})
    delete nuser["newu"]}
    else{
    fs.open("./ooo.txt","r",(err,fd)=>{
        if(err){
            console.log("err")
        }
        else{
            data = fs.readFile(fd,"utf8",(err,data)=>{
                if (err) {console.log(err)} 
                else { if(JSON.stringify(req.body)==data){console.log("true") ; res.send(["mot de passe correcte"])}else{console.log("false") ; res.send(["mot de passe incorrect"])} ; console.log(data)}
            })}})}}

app.listen(3000,()=>{
    console.log("open");
    console.log("aaaa")
})


app.post("/",readf)

app.get("/",(req,res)=>{
    res.send("ooooo")
})

app.get("/ogre",(req,res)=>{
    res.send(awago)
})

app.get("/ogre/:bin",(req,res)=>{
    console.log(req.params.bin)

    res.send(awago.find((obj)=>{return obj.id === Number(req.params.bin)}))
})