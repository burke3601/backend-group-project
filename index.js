require('dotenv').config();
var path = require('path')
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const http = require('http')
const express = require('express')
const morgan = require("morgan")

const { homeRouter, userRouter, listRouter, choreRouter, teamRouter, commentRouter } = require('./routers')

const logger = morgan("tiny")

const app = express()
const server = http.createServer(app)

app.use(logger)
//app.use(helmet())

const port = 3030
const host = 'localhost'




// Needed for Templates 
const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

 //app.use('/static', express.static(__dirname + "/public"))
app.use(express.static("./public"))

app.use(express.urlencoded({extended:true}))

app.use(session({
    store: new FileStore(), // no options for now
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 604800000 //1 Week in milli
    }
}));


app.use(homeRouter)
app.use('/user', userRouter)
app.use('/members-only', listRouter)
app.use('/members-only/team', teamRouter) 
app.use('/members-only/:id/new' , choreRouter)








server.listen(port, host, () => {
    console.log(`Running on host:${host} port: ${port}`)
})








// require('dotenv').config(); 

// const http = require('http');
// const express = require('express');
// const morgan = require('morgan');

// const PORT = 3434;
// const app = express();
// const server = http.createServer(app);

// const es6Renderer = require('express-es6-template-engine');
// const { Router } = require('express');
// app.engine('html', es6Renderer);
// app.set('views', 'templates');
// app.set('view engine', 'html');

// const logger = morgan('dev');
// app.use(logger);

// app.use(express.urlencoded({ extended: true}));

// app.get('/', (req, res) => {
//     res.render('index');
// })
// app.get('/newUser',(req,res)=>{
//     res.render('/forms/createUser')
// })
// app.get('/login', (req,res)=>{
//     res.send(`<h1>Login form</h1>
//     <a href ="/myaccount" method="POST">my account</a><br>
//     <a href ="/newUser" method="POST">back</a>`)
// })

// app.get('/login', (req,res)=>{
//     res.send(`<h1>In my account</h1>
//     <a href ="/myaccount" method="POST">my account</a><br>
//     <a href ="/login" method="POST">back</a>
//     `)
// })
// app.get('/myaccount', (req, res)=>{
//     res.send(`<h1>In my account</h1><br>
//     <a href ="/editprofile" method="POST">edit profile</a><br>
//     <a href ="/teamlist" method="POST">team list</a><br>
//     <a href ="/login" method="POST">create team</a><br>
//     <a href ="/login" method="POST">personal chores list</a><br>
//     <a href ="/login" method="POST">back</a>
//     `)
// })
// app.get('/teamlist',(req,res)=>{
//     res.send(`<ul>
    
//     <a href ="/teama" method="POST"><li>Team A</li></a><br>
    
//     <li>
//     team b
//     </li>
//     <li>
//     team A
//     </li>
//     </ul>`)
// })
// app.get('/teama', (req,res)=>{
//     res.send(`<h1>Team A</h1>
//     <h2>chore list for Team A</h2><br>
//     <ul>
//         <li>
//             Take out Trash
//             <ul>
//                 <li>Close the lid Will ~ Will's wife</li>
//             </ul>
//         </li>
//         <li>
//             Walk the dog
//             <ul>
//                 <li>Take a trash bag ~ Darren's wife</li>
//                 <li>Close the door ~ Darren's wife</li>
//                 <li>Take a trash bag ~ Darren's wife</li>
//             </ul>
//         </li>
//     </ul>`)
// })


// app.get('/myaccount', (req,res) => {
//     res.write(`${}'s Profile`)
// })

// server.listen(PORT, () => {
//     console.log(`Running at http://localhost:${PORT}`);
// });

