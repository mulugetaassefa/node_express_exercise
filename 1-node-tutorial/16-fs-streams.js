const { writeFileSync}= require('fs')

for(let i=0; i<10000; i++) {
    writeFileSync('./content/big.txt',`hello world ${i}`,{flag:'a'})
}

var http =require('http')

var fs=require('fs')

http.createServer(function (req,res) {
    const text =fs.readFileSync('./content/big.txt','utf8')
    res.end(text)
}).listen(3000)