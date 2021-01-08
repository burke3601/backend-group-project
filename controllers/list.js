const {layout} = require('../utils')
const {Contact} = require('../models')
// const Sequelize = require('sequelize')


const listPage = async (req, res)=>{
    const { username, id } = req.session.user
    if (id) {

        let contacts = []
        try {
            contacts = await Contact.findAll({
                where: {
                    UserId: id,
                }
            })
            //console.log(`contact`, contacts);
        } catch (e) {
            console.log(`THIS IS ERROR`, e);
        }
        res.render("list", {
            ...layout,
            locals: {
                title: "Contact list",
                // username,
                contacts,
            }
        })
    }
}

const newContact = (req, res)=>{
    res.render('forms/contactForm', {
        
            ...layout,
            locals:{
                title: 'Contact'
            }
    })
}
// && phone && id && email && address
const processContact= async (req, res)=>{
    console.log('processing contact')
    const { name, address, email, phone } = req.body
    const {id} = req.session.user
    try {
        if (name && id) {
            const newContact = await Contact.create({
                name,
                phone,
                address,
                email,
                UserId: id
            })
            
            res.redirect(`${req.baseUrl}/list`)
        } else {
            res.redirect(`${req.baseUrl}/list`)
        }
    } catch (e) {
        console.log(`ERROR ${e}`);
        res.redirect(`${req.baseUrl}/list`)
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
            res.redirect(`${req.baseUrl}/list`)
        }
    } catch (e) {
        console.log(`ERROR`, e);
        res.redirect("/members-only/list")
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
        res.render('forms/contactForm', {
            
            ...layout,
            locals:{
                title: 'edit Contacts',

            }
        })
    }else{
        res.redirect(`${req.baseUrl}/list`)
    }
}

module.exports = {
    listPage,
    newContact,
    processContact,
    showContact,
    editContact
}