const {layout} = require('../utils')
const { User, Team, Membership} = require('../models')


const listPage = async(req, res)=>{
    const { username, id } = req.session.user
    //console.log(username)
    console.log('!@#$%^&*')
    //console.log(id)
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
        // console.log(team)
        // console.log(Object.keys(teams[0]))
        // console.log(teams[0].name)
        // console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        //console.log(members)
    }
    // console.log(members[0])
    // console.log("$%$%$%$%$%$%")
    // console.log(teams[0])
   
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
        console.log("**********************************")
        console.log(name)
    try {
        if (name) {
            const newTeam = await Team.create({
                name,
                
            }) 
            console.log(typeof(newTeam.id))
            console.log('#############################')
            const members = []
            for(i = 0; i < checked.length; i++){
            let member = await User.findOne({
                where: {
                    id: checked[i]
                }
            })

            //members.push(member)
            if(newTeam.id){
                const teamMemberShip= await Membership.create({
                    userID: member.id,
                    teamID: newTeam.id
                })
                console.log('Here is the if console log')
           }
        }
            res.redirect(`${req.baseUrl}/userhome`)
            //,{
                // locals:{
                //     //member
                // }
           // })
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





