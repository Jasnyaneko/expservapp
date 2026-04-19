const express = require("express")
const app = express()
const cors = require("cors")
const fs = require("fs")

app.use(cors(origin="null"))

app.listen(3000,() => {console.log("open")})

app.get("/", async (req,res) => {
    function read() {
        return new Promise((resolve) => {
            fs.readFile("./ooo.txt","utf8",(err,data) => {
                resolve(data)
            })
        })
    }
    console.log(read)
    res.send(JSON.parse(await read()))
})