 var http = require('http');
 var port = 3050;
 var fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        console.log("Request came from: " + request.url);
        response.end();  
    }).listen(port, function(){
        console.log("Listening on port " + port);
    });
});


