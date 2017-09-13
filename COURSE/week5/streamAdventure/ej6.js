//Instalamos el modulo de concat stream
//ES un stream reescribible que concatena toda la data
//desde un stream  y hace una llamada callback con el resultado
var concat = require('concat-stream');


//process.stdin es de lectura y escritura a la vez
//1)Cuando hacemos el stdin nos entra data.
//2) Le hacemos un pipe para empaquetar todo el chunk y la concatenamos.
//3) Creamos una funcion anonima con un stdout para sacar la info
//4)Hacemos que sea rewritable con el write.Ahora que es editable la convertimos a toString(), la spliteamos, le hacemos un reverse y la volvemos a unir 
process.stdin.pipe(concat(function(buf){
    process.stdout.write(buf.toString().split('').reverse().join(''));
}));






/*
You will be given text on process.stdin. Buffer the text and reverse it using
the `concat-stream` module before writing it to stdout.

`concat-stream` is a write stream that you can pass a callback to get the
complete contents of a stream as a single buffer. Here's an example that uses
concat to buffer POST content in order to JSON.parse() the submitted data:

    var concat = require('concat-stream');
    var http = require('http');
    
    var server = http.createServer(function (req, res) {
        if (req.method === 'POST') {
            req.pipe(concat(function (body) {
                var obj = JSON.parse(body);
                res.end(Object.keys(obj).join('\n'));
            }));
        }
        else res.end();
    });
    server.listen(5000);

In your adventure you'll only need to buffer input with `concat()` from
process.stdin.

Make sure to `npm install concat-stream` in the directory where your solution
file is located.

*/