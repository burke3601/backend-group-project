# Honey Dews (Advance To Do List)
## As a user I want to:
-Sign up/login... 
    1. first and last name
    2. username
    3. email
    4. password 
    5. phone number
-Once account is created...
    1. choose chore/task catgeory (MAYBE)
    2. create team
    3. join an existing team
    2. search by username/team
    3. create chore/task
    4. check off completed chores (update)
    5. share chores list with other users (retrieve)
    6. allow other users to manipulate chores
    7. add details about a task --instructions, pics, directions (update)
    8. delete completed chore/task
-Edit profile options...
    1. select avator or add profile pic
    2. change password
    3. change username

-** maybe --> have a rating that depends on my completion of chores --superstar rating, stars, etc.
for user experience
-delete teams (delete)
Tables?
user --> hasMany (teams, chores, comments) -->hasOne(rating)
teams --> haveMany (users)
chores --> haveMany (comments) createdBy (one user) hasOne(isComplete?)
comments --> belongTo (user)
rating --> belongsTo (user)
option for chores: assigned to user
                 : assigned to team
                 : isComplete(checkbox)
option for teams: add user
                : add chore
                : delete team
option for comments: posted by user in team
                   : delete
**rating--> based on completed chores--


## Generate Models

## Define the assoicatins

## Create seed data

##