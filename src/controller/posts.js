const {Posts,Users} = require('../db/model') 

async function createPost(nameOfUser,titleEntered,bodyEntered){
    const theUser = await Users.findOne({
        where:{
            username:nameOfUser
        }
    })
    let theUserId = theUser.id
    const postBody = await Posts.create({
        userId:theUserId,
        title:titleEntered,
        body:bodyEntered
    }) 
    return postBody
}
async function getPost(){
    const getPost = await Posts.findAll({
        include: [ Users ]
    })
    return getPost
    
}
async function fetchPostById(byId){
    const fetchPost = await Posts.findOne({
        where:{
            id:byId
        },
        include: [Users]
    })
    return fetchPost
}
async function fetchPostByUser(byUser){
    let user = await Users.findOne({
        where:{
            username:byUser
        }
    })
    let usersId = user.id
    let posts = await Posts.findAll({
        where:{
            userid:usersId
        }
    })

    return posts

}

module.exports = {
    createPost,
    getPost,
    fetchPostById,
    fetchPostByUser
}