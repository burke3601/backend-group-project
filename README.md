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

## npx sequelize-cli model:generate --name Chore --attributes 'name:STRING, isComplete:BOOLEAN, teamID:INTEGER' 
## npx sequelize model:generate --name User --attributes 'username:STRING, hash:STRING, rating:INTEGER'  
## npx sequelize model:generate --name Team --attributes ' name:STRING' 
## npx sequelize model:generate --name Comment --attributes 'itemID:INTEGER, userID:INTEGER'
## npx sequelize model:generate --name Membership --attributes 'userID:INTEGER, teamID:INTEGER'      

