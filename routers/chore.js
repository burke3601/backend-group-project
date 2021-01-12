const express = require('express');
const router = express.Router();
const  choreControllers  = require('../controllers/chore')



 
    router.get('/', choreControllers.choreList)
    router.get('/new', choreControllers.choreShowForm)
    router.post('/new', choreControllers.choreProcessForm)

module.exports = router