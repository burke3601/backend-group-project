const express = require('express')
const router = express.Router()
const  teamControllers  = require('../controllers/team')

router.get('/', teamControllers.teamPage)
// router.get('/newTeam', teamControllers.newTeam)
// router.post('/userhome/newTeam', teamControllers.processTeam)
// router.get('/contact/:id', listControllers.showContact)
// router.get('/contact/editContact/:contactId', listControllers.editContact)
//.post('/editContact/:contactId')
module.exports = router

//updating team router