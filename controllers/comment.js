const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')
const {Chore} = require('../models');
const {Comment} = require('../models');


const processComment = async (req,res) => {
    const {comment , itemID} = req.body;
    
    console.log(req.params);
    const {id} = req.sessions.user;
    //const {teamID} = req.body;
    const tid = req.params.id
    //if (name && teamID) {
        const newComment = await Comment.create({
            post: comment,
            itemID,
            userID: id
        });
        console.log("in comment ProcessForm");
        res.redirect(`${req.baseUrl}/${tid}`)
    // } else {
        // console.log('Could not create new chore');
        // res.send("Error Page")
    }
//};


module.exports = {
    processComment
};

