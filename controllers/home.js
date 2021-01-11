

const {layout} = require('../utils')

const homePage = (req, res)=>{
    
    res.render('index', {
        ...layout,
        locals:{
            title: 'homepage'
        }
    })
}

// const listPage = (req, res)=>

module.exports = {
    homePage
}