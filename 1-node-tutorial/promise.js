const {readFile} = require('fs')

const getText =(path) => {
    return new promise((resolve,reject) => {
     readFile('path','utf8',(err,data) => {
        if (err) {
            reject(err)
        }
        else  { 
          resolve (data)}
        }
        )
    })

    const start = async() => {
        const first= await getText('./content/subfolder/first.txt');
        console.log(first);
     }
     start() 
    

//     getText('./content/subfolder/second.txt')
//    .then((result)=>console.log(result))
//    .catch((err) =>console.log(err))

 