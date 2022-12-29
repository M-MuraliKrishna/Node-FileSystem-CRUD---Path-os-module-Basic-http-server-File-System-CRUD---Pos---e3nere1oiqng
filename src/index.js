const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	const res = await fs.readFile(fileName);
	return res.toString();
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const res = await fs.appendFile(fileName, fileContent);
	return res;
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	const res = await fs.unlink(fileName);
	return res;
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }