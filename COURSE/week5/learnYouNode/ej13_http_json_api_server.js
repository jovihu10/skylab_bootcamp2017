var http = require('http')
var port = process.argv[2]
var url = require('url')


// fer stringuify del JSON
// /api/parsetime?iso=2013-08-10T12:10:15.474Z 
/*
{  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
*/
var server = http.createServer(function(req, res){
var obj = {}
var query = url.parse(req, true).query
console.log(query)

//endoint.query

res.writeHead(200, { 'Content-Type': 'application/json' }) 
}).listen(port


/* Add second endpoint for the path '/api/unixtime' which accepts the same  
  query string but returns UNIX epoch time in milliseconds (the number of  
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
  For example:  
   
     { "unixtime": 1376136615474 }  
     */