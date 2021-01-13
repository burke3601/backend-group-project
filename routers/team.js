const express = require('express')
const router = express.Router()
const  teamControllers  = require('../controllers/team')
const  choreControllers  = require('../controllers/chore')
const commentControllers = require('../controllers/comment')

router.get('/:id', teamControllers.teamPage)
//router.post('/:id', choreControllers.choreProcessForm)
router.post('/:id', commentControllers.processComment)
//router.post('/:id', commentControllers.processComment)
// router.get('/newTeam', teamControllers.newTeam)
// router.post('/userhome/newTeam', teamControllers.processTeam)
// router.get('/contact/:id', listControllers.showContact)
// router.get('/contact/editContact/:contactId', listControllers.editContact)
//.post('/editContact/:contactId')
module.exports = router

//updating team router

