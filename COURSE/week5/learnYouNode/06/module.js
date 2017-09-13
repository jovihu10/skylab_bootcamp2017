var fs = require('fs')
module.exports = function (directory, extension, callback) {

  var list = fs.readdir(directory, 'utf8', function (err, data) {
    if (err) return callback(err)
    var results = data.filter(function (key) {
      var ext = key.split('.')[1]
        return ext === extension
    })
    callback(null, results)

  })
}
