const {Users} = require('../db/model')
const {generateUserName} = require('../utils/userName')

async function newUser(){
    const userName = await Users.create({
        username:generateUserName()
    })
    return userName
}
async function findUserById(userid){
    const theUser = await Users.findOne({
        where: {
            id: userid
        }
    })
    return theUser
}
async function findUserByName(userName){
    const theUser = await Users.findOne({
        where:{
            username: userName
        }
    })
    return theUser
}
/*async function test(){
    try{
        const newName = await findUserByName('pure-puppy')
        console.log(newName)
    }
    catch(err){
        console.error(err)
    }
    
}
test()*/
module.exports = {
    newUser,
    findUserById,
    findUserByName
}