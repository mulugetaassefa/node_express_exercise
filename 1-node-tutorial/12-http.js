const http=require('http')

const server =http.createServer((req,res)=>{ 

   if(req.url==='/') {
    res.end('Wellcome to Home Page')

   } else if(req.url ==='/about') {
    res.end('This page is About Page')
   }
   else {
    res.end(`
    <h1>oops</h1>
    <p>server page</p>
    `)
   }
   
})

server.listen(3000, () =>console.log('surver running '))