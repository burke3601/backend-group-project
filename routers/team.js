const express = require('express')
const router = express.Router()
const  teamControllers  = require('../controllers/team')
const  choreControllers  = require('../controllers/chore')
const commentControllers = require('../controllers/comment')

router.get('/:id', teamControllers.teamPage)
router.post('/:id/chore', choreControllers.choreProcessForm)
router.post('/:id/deleteChore',choreControllers.deleteChore)
router.post('/:id/comment', commentControllers.processComment)

module.exports = router

//updating team router

