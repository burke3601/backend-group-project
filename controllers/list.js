const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')

// const Sequelize = require('sequelize')


const listPage = async(req, res)=>{
    const { username, id } = req.session.user
    let teams = []
    if (id) {
        teams = await Team.findAll()
        console.log(teams)
        res.render("userhome", {
            ...layout,
            locals: {
                title: "User home",
                username,
                teams,
                id

            }
        })
    }
}

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
                contacts
            }
        })
    }
}

const getMember = ()=>{

} 

// && phone && id && email && address
const processTeam= async (req, res)=>{
    console.log('processing contact')
    const { name } = req.body
    const { id } = req.session.user
    const { checked } = req.body
    //res.send(`you have created a team named: ${name} with the following members: ${isChecked}`)
        console.log(checked)
    try {
        if (name && id) {
            const newTeam = await Team.create({
                name
            })
            res.redirect(`${req.baseUrl}/userhome`)
        }else {
            res.redirect(`${req.baseUrl}/userhome`)
        }
    } 
    catch (e) {
        console.log(`ERROR ${e}`)
        res.redirect(`${req.baseUrl}/userhome`)
            }
        
    }
    





const showContact = async (req, res) => {
    console.log('redirecting somewhere')
    const {
        id
    } = req.params
    try {
        if (id) {

            const contact = await Contact.findOne({
                where: {
                    id
                }
            })
            res.render('contact-details', {
                ...layout,
                locals: {
                    title: contact.name,
                    contact,

                }
            })

        } else {
            res.redirect(`${req.baseUrl}/userhome`)
        }
    } catch (e) {
        console.log(`ERROR`, e);
        res.redirect("/members-only/userhome")
    }
}
const editContact = async (req, res)=>{
    console.log('*********entered edit**************')
    const { id } = req.session.user
    const { contactId } = req.params
    if (id && contactId){
        const contact = await Contact.findOne({
            where:{
                id: contactId
            }
        })
        //console.log(`getting contact ${contact}, ${contactId}`)
        res.render('forms/newTeamForm', {
            
            ...layout,
            locals:{
                title: 'edit Contacts',

            }
        })
    }else{
        res.redirect(`${req.baseUrl}/userhome`)
    }
}

module.exports = {
    homePage,
    newTeam,
    processTeam,
    showContact,
    editContact
}