const route = require('express').Router() 
const {createPost,getPost,fetchPostById,fetchPostByUser} = require('../../controller/posts')

route.post('/',async (req, res) =>{
    const {theName,title,body} = req.body
    if ((!theName) || (!title) || (!body)) {
        return res.status(400).send({
            
            error: 'Need userid, title and body to create post'
        })
    }
    else{
        const feedPost = await createPost(req.body.theName, req.body.title, req.body.body)
        res.status(201).send(feedPost)
    }

})

route.get('/', async (req, res) => {
    const posts = await getPost()
    res.status(200).send(posts)
})
route.get('/:id',async (req, res)=>{
    const userDetail = req.params.id 
    let user
    if(isNaN(userDetail)){
        user = await fetchPostByUser(req.params.id)
    }
    else{
        user = await fetchPostById(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(400).send('INVALID INPUT')
    }
})

module.exports = route