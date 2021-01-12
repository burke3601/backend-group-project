const {layout} = require('../utils')
const {Contact, User, Team, Membership} = require('../models')
const user = require('../models/user')
const membership = require('../models/membership')
//const membership = require('../models/membership')

// const Sequelize = require('sequelize')


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
    
    //console.log(`***********${members[3].dataValues.userID}**********`)
    //console.log(`***********${team}**********`)
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
    // let teamMembers = []
    // for(i = 0; i< members.length; i++){
    //     const teamMember = await User.findOne({
    //         where:{
    //             id: members[i].userID
            
    //         }
    //     })
    // }
    
// }

const newTeam = async (req, res)=>{
    const { username, id } = req.session.user

    if (id) {

        let contacts = []
        try {
            contacts = await User.findAll()
            //console.log(`contact`, contacts);
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
                
            }//console.log(teamMemberShip)
            
            
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
    





// const showContact = async (req, res) => {
//     console.log('redirecting somewhere')
//     const {
//         id
//     } = req.params
//     try {
//         if (id) {

//             const contact = await Contact.findOne({
//                 where: {
//                     id
//                 }
//             })
//             res.render('contact-details', {
//                 ...layout,
//                 locals: {
//                     title: contact.name,
//                     contact,

//                 }
//             })

//         } else {
//             res.redirect(`${req.baseUrl}/userhome`)
//         }
//     } catch (e) {
//         console.log(`ERROR`, e);
//         res.redirect("/members-only/userhome")
//     }
// }
// const editContact = async (req, res)=>{
//     console.log('*********entered edit**************')
//     const { id } = req.session.user
//     const { contactId } = req.params
//     if (id && contactId){
//         const contact = await Contact.findOne({
//             where:{
//                 id: contactId
//             }
//         })
//         //console.log(`getting contact ${contact}, ${contactId}`)
//         res.render('forms/newTeamForm', {
            
//             ...layout,
//             locals:{
//                 title: 'edit Contacts',

//             }
//         })
//     }else{
//         res.redirect(`${req.baseUrl}/userhome`)
//     }
// }

module.exports = {
    listPage,
    newTeam,
    processTeam,
    // showContact,
    // editContact
}