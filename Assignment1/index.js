const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name

	fs.writeFile(fileName, fileContent);
	console.log("file created");
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName);
	console.log("file reading completed");      
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent);
	console.log("file updated");
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
	console.log("file deleted");
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
myFileWriter('File.txt','Hello');
myFileReader('File.txt');
myFileUpdater('File.txt', ' World');
// myFileDeleter('File.txt');