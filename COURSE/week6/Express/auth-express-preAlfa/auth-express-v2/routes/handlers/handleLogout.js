function handleLogout (req,res) {
  req.session.userLogged = null
  res.redirect('/login')
}

module.exports = handleLogout