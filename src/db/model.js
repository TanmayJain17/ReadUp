const {db,Model} = require('./connnection')
const {DataTypes} = require('sequelize')

const COL_ID_DEF = {
    type:DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
}

class Users extends Model{}
Users.init({
    id:COL_ID_DEF,
    username:{
        type:DataTypes.STRING(50),
        allowNull: false
    }
},{sequelize:db,modelName:'user'})

class Posts extends Model{}
Posts.init({
    id:COL_ID_DEF,
    title:{
        type:DataTypes.STRING,
        allowNull: false
    },
    body:{
        type:DataTypes.TEXT
    }
},{sequelize:db,modelName:'post'})

class Comments extends Model{}
Comments.init({
    id:COL_ID_DEF,
    title:{
        type:DataTypes.STRING,
        allowNull: false
    },
    body:{
        type:DataTypes.TEXT('Tiny')
    }
},{sequelize:db,modelName:'comment'})

/*db.sync({force:true})
.then(()=>{
    console.log('tables created')
})
.catch((err)=>{
    console.error(err)
})*/

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)

module.exports = {
    db,
    Users,
    Posts,
    Comments
}