const fs = require("fs")
function read() {
    return new Promise((resolve) => {
        fs.readFile("./ooo.txt","utf8",(err,data) => {
            if(err){
                console.log(err)
            }
            else{
                resolve(data)
            }
            
        })
    })
}


resizeBy.send(await read())
/*read().then((datar) => {console.log(datar)})*/