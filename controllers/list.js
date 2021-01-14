const {layout} = require('../utils')
const { User, Team, Membership} = require('../models')


const listPage = async(req, res)=>{
    const { username, id } = req.session.user
    const  checked  = req.body
    const  members = await Membership.findAll({
        where:{
            userID: id
        }
    })
        let teams = []
        for(i = 0; i < members.length; i++){
        const team = await Team.findOne({
            where:{
                id: members[i].teamID
            }
        })
        teams.push(team)
    }
   
    res.render("userhome", {
        ...layout,
        locals: {
            title: "User home",
            username,
            teams,
            members
        }
    })
}
  
const newTeam = async (req, res)=>{
    const { username, id } = req.session.user
    if (id) {
        let contacts = []
        try {
            contacts = await User.findAll()
           
        } catch (e) {
            console.log(`THIS IS ERROR`, e);
        }
        res.render('forms/newTeamForm', {
            ...layout,
            locals:{
                title: 'Contact',
                contacts,
            }
        })
    }
}
// && phone && id && email && address
const processTeam= async (req, res)=>{
    console.log('processing contact')
    const { name } = req.body
    const { checked } = req.body
    const membersArray = []
        console.log(checked)
    try {
        if (name) {
            const newTeam = await Team.create({
                name,
            })
            for(i = 0; i < checked.length; i++){
            let member = await User.findOne({
                where: {
                    id: checked[i]
                }
            })
            if(newTeam.id){
                const teamMemberShip= await Membership.create({
                    userID: member.id,
                    teamID: newTeam.id
                })
            }
        }
            res.redirect(`${req.baseUrl}/userhome`,{
                locals:{
                    member
                }
            })
        }else {
            res.redirect(`${req.baseUrl}/userhome`)
        }
    }
    catch (e) {
        console.log(`ERROR ${e}`)
        res.redirect(`${req.baseUrl}/userhome`)
            }
    }

module.exports = {
    listPage,
    newTeam,
    processTeam,
}





