const http=require('http')
 const {readFileSync}=require('fs')
 const homePage=readFileSync('./index.html');
 const homeStyles=readFileSync('./styles.css');
 const homeScript=readFileSync('./script.js');


 const server =http.createServer((req,res) => {
    if(req.url==='/') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
    } 
    else if (req.url==='/about') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end() 
    }
    else  if (req.url ==='/styles.css') { 
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end() 
    }
    else  if (req.url ==='/script.js') { 
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeScript)
        res.end() 
    }
    else {
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Page is not found</h1>')
        res.end() 
    }
 })

 server.listen(3000)