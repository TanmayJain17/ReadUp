const route = require('express').Router();
const {newUser,findUserById,findUserByName} = require('../../controller/users')

route.get('/:id',async (req, res)=>{
    const userDetail = req.params.id 
    let user
    if(isNaN(userDetail)){
        user = await findUserByName(req.params.id)
    }
    else{
        user = await findUserById(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(400).send('INVALID INPUT')
    }
})

route.post('/',async (req, res)=>{
    const postName = await newUser()
    res.send(postName)
})
module.exports = route