var json = process.argv[2]

function parsePromised() {
    var promise = new Promise(function(fulfill, rejected) {
        try {
            fulfill(JSON.parse(json))
        } catch (e) {
            rejected(console.log(e))
        }
    })
}

parsePromised()