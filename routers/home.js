const express = require('express')
const router = express.Router()
const { homeControllers } = require('../controllers')

router.get('/', homeControllers.homePage)

router.get('/about', homeControllers.aboutPage)

router.get('/contactUs', homeControllers.contactUsPage)

module.exports = router