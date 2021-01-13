const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')
const {Chore} = require('../models');
const {Comment} = require('../models');


const processComment = async (req,res) => {
    const {comment} = req.body;
    //console.log(req.sessions.user);
    //const {id} = req.sessions.user;
    //const {teamID} = req.body;
    const tid = req.params.id
    //if (name && teamID) {
        const newComment = await Comment.create({
            post: comment,
           // userID: id
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

