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

## npm i sequelize-cli model:generate --name Chore --attributes 'itemID: INTEGER(PK), name:STRING, isComplete:BOOLEAN' 
## npm i sequelize-cli model:generate --name User --attributes 'userID:INTEGER(PK), username:STRING, hash:STRING, rating:INTEGER'  
## npm i sequelize-cli model:generate --name Team --attributes 'teamID:INTEGER(PK), name:STRING, userID:INTEGER(FK), itemID: INTEGER(FK)' 
## npm i sequelize-cli model:generate --name Comment --attributes 'itemID:INTEGER(PK), itemID:INTEGER(FK), userID:INTEGER(FK)'    

