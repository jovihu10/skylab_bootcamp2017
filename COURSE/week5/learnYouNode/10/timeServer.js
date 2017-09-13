/*¡Crea un **Servidor de tiempo y hora TCP **!

El servidor debe escuchar conexiones TCP en el puerto indicado por el primer argumento del programa. Para cada conexión debes escribir la fecha actual y la hora en formato 24hs del siguiente modo:

"AAAA-MM-DD hh:mm"
seguido por un carácter newline('\n'). Tanto el mes, el día como la hora y minuto deben tener un 0 para ocupar 2 espacios, por ejemplo:

"2013-07-06 17:42"

*/
//1ª manera
var net = require('net')

var strftime = require('strftime')

var PORT = process.argv[2]

var server = net.createServer(function(socket) {
    //socket.end es per a que envii i rebi data a la vegada
    socket.end(strftime('%F %H:%M', new Date()) + '\n')
}).on('error', function(err) {
    throw err
})

server.listen(PORT, function() {
    console.log('opened server on', server.address())
})



//2º manera
/*
var net = require('net')
var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
var through2 = require('through2')
var rndport = require('../../lib/rndport')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// assign ports for the child processes to listen to
exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport()
  this.solutionPort = this.submissionPort + 1

  // set child process arguments
  this.submissionArgs = [ this.submissionPort ]
  this.solutionArgs = [ this.solutionPort ]

  process.nextTick(callback)
})

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {
  this.submissionStdout.pipe(process.stdout)

  // replace stdout with our own streams
  this.submissionStdout = through2()
  if (mode === 'verify') {
    this.solutionStdout = through2()
  }

  setTimeout(query.bind(this, mode), 500)

  process.nextTick(function () {
    callback(null, true)
  })
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode) {
  var exercise = this

  // on error, write to the stream so that'll also be verified

  // connect to localhost:<port> and pipe results to <stream>
  function connect (port, stream) {
    net.connect(port)
      .on('error', function (err) {
        stream.end()
        setImmediate(function () {
          exercise.emit(
            'fail'
            , exercise.__('fail.connection', {port: port, message: err.message})
          )
        })
      })
      .pipe(stream)
  }

  connect(this.submissionPort, this.submissionStdout)

  if (mode === 'verify') {
    connect(this.solutionPort, this.solutionStdout)
  }
}

module.exports = exercise

*/