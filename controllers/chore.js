const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')
const {Chore} = require('../models/chore');

const choreShowForm = (req, res) => {
    res.render('forms/createChore', {
        locals: {
            title: "Add new chore"
        },
        ...layout
    });
};

const choreProcessForm = async (req,res) => {
    const {name} = req.body;
    const {teamID} = req.body;

    if (name && teamID) {
        const newChore = await Chore.create({
            name,
            isComplete: false,
            teamID: id
        });
        console.log(newChore);
        res.redirect(`${req.baseUrl}/userhome`)
    } else {
        console.log('Could not create new chore');
        res.send("Error Page")
    }
};

 const choreList = async (req,res) => {
    const {teamID} = req.body;
    if (teamID) {
        const chores = await Chore.findAll ({
            where: {
                teamID: id
            }
        });
        res.render('/list', {
            locals: {
                chores
            },
            ...layout
        })
    } else {
        res.redirect("/userhome")
    }
};

module.exports = {
    choreList,
    choreShowForm,
    choreProcessForm

};

