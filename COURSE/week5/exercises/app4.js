/*##4. File list

Write a node.JS program that list the content of the current directory indicating if is a directory or a file

$ node ex4.js 
FILE:ex1.js
FILE:ex2.js
FILE:ex3.js
FILE:ex4.js
FILE:getLinksNode.js
FILE:link.txt
DIR :node_modules
FILE:recursiveContentsDir.js
FILE:results.txt
FILE:test.txt
Hint: You need fs.readdirSync, fs.lstatSync and isDirectory()
*/



var fs = require('fs');
var PATH_TO_READ = process.env.PATH_TO_READ || '.'
console.log(PATH_TO_READ);
//var currentPath = '.'

var listFiles = fs.readdirSync(currentPath);

var infoListFiles = listFiles.map(function(filename){
	
	var ostatsFile = fs.lstatSync(filename)
	var type = ostatsFile.isDirectory() ? 'DIR ': 'FILE '
	return type + filename
}

})
console.log(infoListFiles.join('\n'));


//data-file en terminal