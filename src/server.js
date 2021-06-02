const express = require('express')
const { db } = require('./db/model')
const path = require('path')
const PORT = process.env.PORT || 4747
const userRoute = require('./routes/users/index')
const postRoute = require('./routes/posts/index')
const commentRoute = require('./routes/comments/index')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)
app.use('/api/comments',commentRoute)

db.sync({alter: true})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started on http://localhost:${PORT}`)
    })
})
.catch((err)=>{
    console.error(err)
})