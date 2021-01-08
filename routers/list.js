const express = require('express')
const router = express.Router()
const { listControllers } = require('../controllers')

router.get('/list', listControllers.listPage)
router.get('/newContact', listControllers.newContact)
router.post('/list/addContact', listControllers.processContact)
router.get('/contact/:id', listControllers.showContact)
router.get('/contact/editContact/:contactId', listControllers.editContact)
//.post('/editContact/:contactId')
module.exports = router