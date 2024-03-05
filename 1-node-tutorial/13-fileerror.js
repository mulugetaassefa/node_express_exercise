const {readFile} = require('fs')

const getText =(path) => {
    return new promise((resolve,reject) => {
     readFile(path,'utf8',(err,data) => {
        if (err) {
            reject(err)
        }
        else  { 
          resolve (data)}
        }
        )
    })

    const start = async() => {
        try { 
        const   first= await getText('./content/subfolder/first.txt','utf8');
        console.log(first);
        }
        catch (err) {
            console.log(err);
        }
     }
     start() 
    

//     getText('./content/subfolder/second.txt')
//    .then((result)=>console.log(result))
//    .catch((err) =>console.log(err))

 