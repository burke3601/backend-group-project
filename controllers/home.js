

const {layout} = require('../utils')

const homePage = (req, res)=>{
    
    res.render('index', {
        ...layout,
        locals:{
            title: 'homepage'
        }
    })
}


const aboutPage = (req, res)=>{
    
    res.render('about', {
        ...layout,
        locals:{
            title: 'aboutpage'
        }
    })
}


const contactUsPage = (req, res)=>{
    
    res.render('contactUs', {
        ...layout,
        locals:{
            title: 'contactUspage'
        }
    })
}

// const listPage = (req, res)=>

module.exports = {
    homePage,
    aboutPage,
    contactUsPage
}