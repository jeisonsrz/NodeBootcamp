const http= require('http');
const fs= require ('fs');
const server = http.createServer((req, res) => {
    fs.readFile("./resource/paginaHere.html",(err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        res.end(data);
    });
});
server.listen(3000);