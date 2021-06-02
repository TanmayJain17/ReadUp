const Sequelize = require('sequelize')
const db = new Sequelize('mysocialmediadb','mysocialmediauser','mysocialmediapass',{
    dialect: 'mysql',
    host:'localhost'
})
const Model = Sequelize.Model
db.authenticate()
.then(()=>{
    console.log('authenticated')
})
.catch((err)=>{
    console.error(err)
})

module.exports = {db,Model}