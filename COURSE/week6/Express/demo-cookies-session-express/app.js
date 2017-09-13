const express = require('express')
const cookieSession = require('cookie-session')
const app = express()

const PORT  = 3007

app.set('view engine', 'pug')
app.use(cookieSession({
  name: 'UnitedKingdomSessionCookie',
  keys: ['palabraClaveSuperSecretaNUmber1', 'YEstaEsOTRApalabraSuperSecret']
}))

app.use( (req,res,next) => {
  req.session.visits = ++req.session.visits || 1
  next()
})

app.get('/', (req,res) => {
  const { visits } = req.session
  res.render('visits', { visits })
})

app.listen(PORT)
console.log(`🔥 Listening on PORT ${PORT}`);