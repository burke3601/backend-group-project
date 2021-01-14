const express = require('express')
const router = express.Router()
const { homeControllers } = require('../controllers')

router.get('/', homeControllers.homePage)

router.get('/about', homeControllers.aboutPage)

module.exports = router