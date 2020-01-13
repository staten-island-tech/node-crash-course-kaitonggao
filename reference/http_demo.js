const http = require('http');

//HOW TO CREATE AND RUN A SERVER
http.createServer((req, res) => {
    //When we get a request, write a response.
    res.write('Hello World');
    res.end();
}).listen(3000, () => console.log('Listening on port 3000...')) //must run on a port #
