const {layout} = require('../utils')
const { User, Team, Membership, Chore} = require('../models')
//const {Team} = require('../models/team')

//team controller

const teamPage = async (req,res) => {
    const tid = req.params.id
    console.log(tid)
    //const message = "this is a chore"
    //if (tid) {
        const chores = await Chore.findAll ({
            where: {
                teamID: tid
            }
        })
    console.log(`*******${tid}************`)
    console.log(`*******${chores.length}************`)
    const thisTeam = await Team.findOne({
        where:{
            id: tid
        }
    })

    const userIds = await Membership.findAll({
        where:{
            teamID: tid
        }
    })
    const users = []
    for(i = 0; i < userIds.length; i++){
        const user = await User.findOne({
            where:{
                id: userIds[i].userID
            }
        })
        users.push(user)
        
    }
    console.log(`*********${users[2].username}********`)
    // console.log(userIds)
    // const newChore = await Chore.create({

    // })
    console.log(tid)
    //
    message = ''
    res.render('forms/teamPage', {
        locals: {
            title: "Add new chore",
            thisTeam,
            userIds,
            users,
            tid,
            chores
        },
        ...layout
    });
};

module.exports = { teamPage }
