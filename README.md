# Super Duper Chores


## Description
A simple app that allows users to create and track team chores and tasks.

## Application
Users sign up by supplying a unique username and a password. Once registered, users create teams with fellow registered users. From their individual page, each user will be able to navigate their different teams. Each team renders a specific team page where users can create and comment on shared chores. After the chore is completed, the user has the option to remove the chore from their to do list.

## How It Started...
<img src="./readme-images/how-it-started.png" width="400" height="400">


## How It's Going...
<h3>Login<h3>
<img src="./readme-images/login-readme.png" width="650" height="400">

<br>
<br>


<h3>Login<h3>

<br>
<br>

<h3>Create User<h3>

<br>
<br>

<h3><h3>

<br>
<br>

<h3><h3>

<br>
<br>




































## user 
        --> hasMany 
            - teams 
            - chores 
            - comments 
        -->hasOne
            - rating

## teams 
        --> haveMany 
            -users
            -chores 
        --> haveMany 
            - comments 
        --> hasOne 
            - createdBy 
            - isComplete?

## comments 
        --> belongTo 
            - user
            - chores

## rating   
        --> belongsTo 
            -user

## option for chores: assigned to user
    : assigned to team
    : isComplete(checkbox)
## option for teams: add user
    : add chore
    : delete team
## option for comments: posted by user in team
    : delete
## rating--> based on completed chores--

 npx sequelize-cli model:generate --name Chore --attributes 'name:STRING, isComplete:BOOLEAN, teamID:INTEGER' 
 npx sequelize model:generate --name User --attributes 'username:STRING, hash:STRING, rating:INTEGER'  
 npx sequelize model:generate --name Team --attributes ' name:STRING' 
 npx sequelize model:generate --name Comment --attributes 'itemID:INTEGER, userID:INTEGER'
 npx sequelize model:generate --name Membership --attributes 'userID:INTEGER, teamID:INTEGER'      

