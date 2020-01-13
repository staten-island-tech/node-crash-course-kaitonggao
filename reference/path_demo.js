const path = require('path'); // path is included with node no ./file ,etc

//How to get 

//Base file name  -> path_demo.js
console.log(path.basename(__filename)); 

//Directory name -> whole directory
console.log(path.dirname(__filename));

//File extension -> .js
console.log(path.extname(__filename));

//Create path object -> gives OBJECT with everything
console.log(path.parse(__filename));

//console.log(path.parse(__filename.base)); -> gives the base 

//Concatenate paths -> <dir name>/test/hello.html 
console.log(path.join(__dirname, 'test', 'hello.html'));

