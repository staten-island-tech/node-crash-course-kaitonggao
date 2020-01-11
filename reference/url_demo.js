const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialized URL => entire url: http://mywebsite.com/hello.html?id=100&status=active
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain) => mywebsite.com
console.log(myUrl.host); 

//Hostname (no port) // Example: :3000 in localhost port 3000.
console.log(myUrl.hostname);

//Pathname => /hello.html
console.log(myUrl.pathname);

//Serialized query => stuff after ?
console.log(myUrl.search);

//Params object => Object with id, status, etc
console.log(myUrl.searchParams);

// Add param => add abc => 123 to set of parameters
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params => lists parameters one by one in console
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));