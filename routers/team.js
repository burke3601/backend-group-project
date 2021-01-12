const express = require('express')
const router = express.Router()
const  teamControllers  = require('../controllers/team')
const  choreControllers  = require('../controllers/chore')

router.get('/:id', teamControllers.teamPage)
router.post('/:id', choreControllers.choreProcessForm)
// router.get('/newTeam', teamControllers.newTeam)
// router.post('/userhome/newTeam', teamControllers.processTeam)
// router.get('/contact/:id', listControllers.showContact)
// router.get('/contact/editContact/:contactId', listControllers.editContact)
//.post('/editContact/:contactId')
module.exports = router

//updating team router