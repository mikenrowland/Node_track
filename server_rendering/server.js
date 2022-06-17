const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '8000';

//Using the createserver method to create a http server instance
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url) {
        case "/home":
            fs.readFile('./home.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
            break
        case "/about":
            fs.readFile('./about.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
            break
        case "/contact":
            fs.readFile('./contact.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
            break
        default:
            fs.readFile('./index.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else{
                    res.write(data);
                }
                res.end();
            })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server successfully created and running at http://${hostname}:${port}/`);
});