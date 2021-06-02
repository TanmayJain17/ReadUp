const { Comments,Users } = require('../db/model') 

async function getAllComments(postIds) {
    const allComments = await Comments.findAll({
        where: {
            postId: postIds
        }
    })
    return allComments
}
async function postComments(pId, uName, commentTitle, commentBody) {
    const getUser = await Users.findOne({
        where:{
            username:uName
        }
    })
    let uId = getUser.id
    const postComment = await Comments.create({
        postId: pId,
        userId: uId,
        title: commentTitle,
        body: commentBody
    })
    return postComment
}
/*  async function test() {
    try {
        const newComment = postComments(1, 3, 'Amazed', 'What an amaizing Post')

    }
    catch (err) {
        console.error(err)
    }
}
test()  */
module.exports = {
    postComments,
    getAllComments
}