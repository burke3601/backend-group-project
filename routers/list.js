const express = require('express')
const router = express.Router()
const { listControllers } = require('../controllers')

router.get('/userhome', listControllers.listPage)
router.get('/newTeam', listControllers.newTeam)
router.post('/userhome/newTeam', listControllers.processTeam)
router.get('/contact/:id', listControllers.showContact)
router.get('/contact/editContact/:contactId', listControllers.editContact)
//.post('/editContact/:contactId')
module.exports = router