const route = require('express').Router()
const {postComments,getAllComments} = require('../../controller/comments')

route.get('/:pId',async (req,res)=>{
    let postId = req.params.pId
    const comments = getAllComments(postId)
    res.status(200).send(comments)
})

route.post('/',async (req,res)=>{
    let {postId,userName,cTitle,cBody} = req.body
    if ((!postId) || (!userName) || (!cTitle) || (!cBody)) {
        return res.status(400).send({
            
            error: 'Need userName, title, postId and body to create post'
        })
    }
    else {
        const createComment = await postComments(postId, userName, cTitle, cBody)
        res.status(201).send(createComment)
    }
})
module.exports = route