const fs = require("fs");
const path = require("path");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  await fs.writeFile(fileName, fileContent, (err) => {
    console.log(err);
  });
};
myFileWriter("file.txt", "Hello");

const myFileReader = async(fileName) => {
  // write code here
  // dont chnage function name
  await fs.readFile(fileName,{encoding:"utf-8"},(err,data)=>{
      if(err){
          console.log(err);
      }else{
          console.log(data);
      }
    
  })
  
};
myFileReader(path.join(__dirname,"file.txt"));

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
    await fs.appendFile(fileName,fileContent,(err)=>{
        console.log(err)
    })
}
myFileUpdater(path.join(__dirname,"file.txt")," World !!")

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
    await fs.unlink(fileName,(err)=>{
        console.log(err)
    })
}
myFileDeleter(path.join(__dirname,"file.txt"))
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
