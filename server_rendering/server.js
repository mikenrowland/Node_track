const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = '8000';

//Using the createserver method to create a http server instance
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Routing through the pages using a switch statement
    switch (req.url) {
        case "/home":
            // Home page
            fs.readFile('./home.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
            break
        case "/about":
            // About page
            fs.readFile('./about.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
            break
        case "/contact":
            // Contact page
            fs.readFile('./contact.html', null, function(error, data){
                if (error){
                    res.writeHead(404);
                    res.write('File not found');
                } else {
                    res.write(data);
                }
                res.end();
            })
            break
        default:
            // Base route redirected to the homepage
            if (req.url === "/"){
                fs.readFile('./home.html', null, function(error, data){
                    if (error){
                        res.writeHead(404);
                        res.write('File not found');
                    } else{
                        res.write(data);
                    }
                    res.end();
                })
            } else {
                res.writeHead(404);
                res.write('File not found');
                res.end();
            }
    }
});

// Exposing port 8000 on localhost for rendering
server.listen(port, hostname, () => {
    console.log(`Server successfully created and running at http://${hostname}:${port}/`);
});