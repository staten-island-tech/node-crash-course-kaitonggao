const fs = require('fs');
const path = require('path');

//Create folder 
/* fs.mkdir(path.join(__dirname, '/test'), {},  (err) => {
    if(err) throw err;
    console.log('Folder created...');

// NOTES: err is a callback, performs with the function


// Create and write to file
/*  fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), '<CONTENT IN FILE> Hello world!', err =>{
    if(err) throw err;
    console.log('File written to...');
    
    // File append (add more text file) put inside
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node.js', err =>{
    if(err) throw err;
    console.log('Text added...');
});
});   */

//Read file
/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
    if(err) throw err;
    console.log(data);
}); */

// NOTES: 2nd parameter needs to be utf8 in order to give you data

//Rename file

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err) => {
        if (err) throw err;
        console.log('File renamed...');
    }
);

// NOTES: 1st param is file, 2nd param is new name of file