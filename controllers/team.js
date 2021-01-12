const {layout} = require('../utils')
const {Contact, User, Team, Membership} = require('../models')
const user = require('../models/user')
const membership = require('../models/membership')

const teamPage = (req, res)=>{
    const id = req.body
    res.send(`<h1> Welcome to team with id: ${id}<h1>`)
}
module.exports = {
    teamPage
}