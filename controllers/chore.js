const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')
const {Chore} = require('../models');



const choreProcessForm = async (req,res) => {
    const {chore} = req.body;
    const tid = req.params.id
    const newChore = await Chore.create({
        name: chore,
        isComplete: false,
        teamID: tid
    });
   
    res.redirect(`${req.baseUrl}/${tid}`)
   
}

module.exports = {
    choreProcessForm
};

