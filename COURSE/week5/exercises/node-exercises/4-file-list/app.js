var fs = require('fs')
var path = require('path')
var PATH_TO_READ = process.env.PATH_TO_READ || '.'

var listFiles = fs.readdirSync(PATH_TO_READ)

var infoListFiles = listFiles.map( function( filename ) {
  var pathToAnalyze = path.join(PATH_TO_READ, filename)
  var oStatsFile = fs.lstatSync( pathToAnalyze )
  var type = oStatsFile.isDirectory() ? 'DIR: ' : 'FILE: '
  return type + filename
})

console.log( infoListFiles.join('\n') ) ;
