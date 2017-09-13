const express = require('express')
const router = express.Router()

const showWelcome = require('./handlers/showWelcome')
const handleLogout = require('./handlers/handleLogout')
const showLogin = require('./handlers/showLogin')
const handlePostLogin = require('./handlers/handlePostLogin')

router.get('/welcome', showWelcome)
router.get('/logout', handleLogout)
router.get('/login', showLogin)
router.post('/login', handlePostLogin)

module.exports = router
