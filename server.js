const http = require('http'); // module is in-build, just have to call it.
const fs = require('fs');
const _lodash = require('lodash');

const server = http.createServer((req, res) =>{

    const randomNum = _lodash.random(0, 30);
    console.log(randomNum);

    const greet = _lodash.once(() =>{
        console.log('hello');
    });

    greet();
    greet();
    
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break; 
    }

    // res.setHeader('Content-Type','text/html'); // setting the type of content that the broswer will be recieving
    // res.write('<head><link rel="stylesheet" href="#" /></head>')
    // res.write('Hello Paulus'); // writing the content
    // res.write('<h1>Node.js Tutus</h1>');
    // res.write('<p>We are going to be developing big things with node.js</p>')
    // res.end(); // ending the the write

    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        // res.write(data);
        res.end(data); // you can remove the code aboth this code to shorten it
    });
});

server.listen(3000, 'localhost',()=>{
    console.log('Actively listening to incomming requests')
});