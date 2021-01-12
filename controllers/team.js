const {layout} = require('../utils')
const { User, Team, Membership} = require('../models')
const {Team} = require('../models/team')



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