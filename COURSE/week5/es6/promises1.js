const fs = require('fs')
const path = require('path')
const [, , path, extension, query] = process.argv
//Node

fs.readDir(path, (err, listFiles) => {
            if (err) throw err

            //Esta funcion va a devolver true o false
            const filterByExtension = filename => path.extname(filename) === '.' + extension
            const filteredFiles = listFiles.filter(filterByExtension)

            filteredFiles.forEach(fileName => {
                    //Para crear rutasdinamicas en base a variables usamos el path.join
                    const.pathToRead = path.join(pathDir, fileName)
                    fs.readFile(pathToRead, 'utf8', (err, contentFile) => {
                            if (err) throw err
                            const hasQuery = contentFile.includes(query)
                        contentStats += '${pathToRead} $hasQuery'
                        if(--numfiles == 0){
                        console.log(pathToRead);
                            console.log(hasQuery);
                        }
                        }
                    })


            })