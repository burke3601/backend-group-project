const {layout} = require('../utils')
const { User, Team, Membership, Chore, Comment} = require('../models')

//team controller

const teamPage = async (req,res) => {
    const tid = req.params.id
    const chores = await Chore.findAll ({
        where: {
            teamID: tid,
        },
        include: Comment
    })  
    //console.log(`$$$$$$$${chores[0].Comment.dataValues.createdAt}`)

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