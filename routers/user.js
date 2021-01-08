const express = require('express')
const router = express.Router()
const { userControllers } = require('../controllers')

router.get('/create', userControllers.newUser)
.post('/create',userControllers.processNewUser)
router.post('/login', userControllers.processLogin)

module.exports = router