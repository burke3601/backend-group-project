const express = require('express')
const router = express.Router()
const { homeControllers } = require('../controllers')

router.get('/', homeControllers.homePage)

module.exports = router