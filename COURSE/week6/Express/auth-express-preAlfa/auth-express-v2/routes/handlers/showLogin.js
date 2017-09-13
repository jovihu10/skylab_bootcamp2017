function showLogin(req, res) {
  if (req.session.userLogged) res.redirect('/welcome')
  else res.render('pages/login')
}

module.exports = showLogin