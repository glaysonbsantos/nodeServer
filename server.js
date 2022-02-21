var http = require('http')
var static = require('node-static')

var path = new static.Server(`${__dirname}/localhost`)

http.createServer(function (require, response){
    require.addListener('end', function(){
        path.serve(require, response)
    }).resume()
}).listen(8080)

console.log('Server criado em localhost:8080')