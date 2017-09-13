const express = require('express')
const path = require('path')
const fs = require('fs')
const readFile = require('fs-readfile-promise')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3001

app.set('view engine', 'pug')
app.use( express.static( path.join(__dirname, 'public' )) )

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'authExpressDemoCookie',
  keys: ['superSecrettglWwSUbo']
}))

//para que no tengamos que poner la ruta en la raíz y de serie sea 
//login
app.get('/', (req, res) =>{
  res.redirect ('/login')
})


//Si no hi ha grabat cockies que et redirigeixi a cockies
app.get('/welcome', (req, res) => {
  if (!req.session.userLogged) res.redirect('/login')
  else {
    res.render('pages/welcome', {
      userLogged: req.session.userLogged
    })
  }

})

//que quan fagi el logout resetegi tot amb el null
app.get('/logout', (req,res) => {
  req.session.userLogged = null
  res.redirect('/login')
})

app.get('/login', (req, res) => {
  if (req.session.userLogged) {
    res.redirect('/welcome')
  }
  res.render('pages/login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  console.log(`${email} → ${password}`)

  readFile('./data/users.txt', 'utf-8')
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
})

//Get para el register para llevarte


app.get('/register', (req, res) => {

    //Es render perque ha de carregar la pagina. REdirect quan t' ha de redireccionar a una web que ja ha sigut carregada 
    res.render('pages/register')

})
 



//post per al register
app.post('/register', (req, res) => {
  const reqUser =  '\r\n' + req.body.email + ':' + req.body.password
  fs.appendFileSync("data/users.txt", reqUser)
//Faig això per a que quan acabi de memoritzarho em porti a l' arrel un altre cop (login)
  res.redirect('/')
})

  //appendFile




//

//  res.send('all done!!')

app.listen(PORT)
//console.log(`Listening on PORT ${PORT}`);