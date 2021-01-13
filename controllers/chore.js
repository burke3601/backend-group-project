const {layout} = require('../utils')
const {Contact, User, Team} = require('../models')
const {Chore} = require('../models');

// const choreShowForm = (req, res) => {
//     res.render('forms/createChore', {
//         locals: {
//             title: "Add new chore"
//         },
//         ...layout
//     });
// };

const choreProcessForm = async (req,res) => {
    const {chore} = req.body;
    //const {teamID} = req.body;
    const tid = req.params.id
    //if (name && teamID) {
        const newChore = await Chore.create({
            name: chore,
            isComplete: false,
            teamID: tid
        });
        console.log("in chore'ProcessForm");
        res.redirect(`${req.baseUrl}/${tid}`)
    // } else {
        // console.log('Could not create new chore');
        // res.send("Error Page")
    }
//};

//  const choreList = async (req,res) => {
//     const tid = req.params.id
//     console.log(tid)
//     const message = "this is a chore"
//     //if (tid) {
//         const chores = await Chore.findAll ({
//             where: {
//                 teamID: tid
//             }
//         })
//         res.redirect(`${req.baseUrl}members-only/${tid}`,{
//             locals:{
//                 message
//             }
//         })
//         console.log(chores.length)
//     }
    //}
//         if(chores){
//         res.render('/list', {
//             locals: {
//                 chores
//             },
//             ...layout
//         })
//     } else{
//         res.send('no chores to list')
//     }
// }
//     else {
//         res.redirect("/userhome")
//     }
// };

const test = (req,res) => {
    res.send('hello')
}

module.exports = {
    
    
    choreProcessForm,
    test

};

