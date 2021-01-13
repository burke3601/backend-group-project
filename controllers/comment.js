const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')
const {Chore} = require('../models');
const {Comment} = require('../models');


const processComment = async (req,res) => {
    const {comment , itemID} = req.body;
    
    console.log(req.params);
   
    const tid = req.params.id
        const newComment = await Comment.create({
            post: comment,
            itemID,
            userID: req.session.user.id,

        });
        console.log("in comment ProcessForm");
        res.redirect(`${req.baseUrl}/${tid}`)

    }


module.exports = {
    processComment
};

