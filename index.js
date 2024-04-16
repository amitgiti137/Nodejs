// const fs = require('fs');
// const path = require('path')

// const dirPath = path.join(__dirname, 'files');
// const filePath = `${dirPath}/grapes.txt`

// for(i = 0;i < 5;i++){
// fs.writeFileSync(`${dirPath}/${i}._apple.txt`,`this is the description of file ${i}`);
// }

// for(i=0;i<5;i++){
//     fs.unlinkSync(`${dirPath}/apple${i}.txt`);
// }

// fs.readdir(dirPath, (err, fi) => {
//     fi.forEach((item) => {
//         console.log(item);
//     })
// })



// fs.writeFileSync(filePath, 'this is the working page');

// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,' Now i am adding to the previous term',(err)=>{
//     if(!err){
//         console.log("file is updated");
//     }
// })

// fs.rename(filePath,`${dirPath}/guava.txt`,(err)=>{
//     if(!err){
//         console.log('name is changed');
//     }
// })

// fs.unlinkSync(`${dirPath}/guava.txt`);
// fs.unlinkSync(filePath);


// const Color = require('color');


