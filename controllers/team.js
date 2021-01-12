const {layout} = require('../utils')
<<<<<<< HEAD
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
=======
const { User, Team, Membership} = require('../models')
const {Team} = require('../models/team')

//team controller

const teamPage = (req,res) => {
    const {id} = req.body
    console.log()
    console.log(id)
    res.render('forms/createChore', {
        locals: {
            title: "Add new chore"
        },
        ...layout
    });
};

module.exports = { teamPage }
>>>>>>> d0c47932ecbf7265c2cdc59635847b55e827da63
