const path = require('path')
const readFile = require('fs-readfile-promise')

function handlePostLogin(req, res) {
  const { email, password } = req.body
  const pathDataFile = path.join( process.cwd(), 'data/users.txt')

  readFile( pathDataFile, 'utf-8')
    .then( contentData => contentData.split('\r\n') )
    .then( aAuthLines =>  aAuthLines.some( authLine => {
      return authLine === `${email}:${password}`
    }))
    .then( bDoesExist => {
        if (bDoesExist) {
          req.session.userLogged = email
          res.redirect('/welcome')
        }
        else res.send('💀 Unauthorized!!')
    })

//  res.send('all done!!')
}

module.exports = handlePostLogin