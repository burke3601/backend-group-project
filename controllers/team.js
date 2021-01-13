const {layout} = require('../utils')
const { User, Team, Membership, Chore, Comment} = require('../models')
//const {Team} = require('../models/team')

//team controller

const teamPage = async (req,res) => {
    const tid = req.params.id
    const myname = req.session.user.username
    console.log(tid)
    //const message = "this is a chore"
    //if (tid) {
        const chores = await Chore.findAll ({
            where: {
                teamID: tid
            },
            include: Comment
        })
    console.log(`*******${tid}************`)
    console.log(`$$$$$$$$$$$$$$$$`)
    console.log(`*******${Object.keys(chores)}************`)

    // const comments = []
    // for(i = 0; i < chores.length; i++){
    //     console.log(`*******${chores[i].id}************`)
    //     const comment = await Comment.findOne ({
    //         where: {
    //             itemID: chores[i].id
    //         }
    //     }) 
    //     comments.push(comment)
    //     }
    //    console.log('did we make it?')
        

    const thisTeam = await Team.findOne({
        where:{
            id: tid
        }
    })

    const comments = await Comment.findAll (
        // {
        //         where: {
        //             id: 4
        //         }
        //     }
            ) 
            //console.log(comments)

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
   // console.log(`*********${users[2].username}********`)
    // console.log(userIds)
    // const newChore = await Chore.create({

    // })
    //console.log(tid)
    //


    message = ''
    res.render('forms/teamPage', {
        locals: {
            title: "Add new chore",
            thisTeam,
            userIds,
            users,
            tid,
            chores,
            myname,
        },
        ...layout
    });
};

module.exports = { teamPage }
