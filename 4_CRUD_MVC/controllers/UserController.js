const User = require('../models/user');

module.exports = class UserController {
  
  static users(req,res){
    res.render('users/create')
  }

  static async createSave(req,res){

    await User.create({
        name:req.body.name,
        email:req.body.email
      })
       res.redirect('users/all')
   }

   static async showUsers(req,res){

    const data = await User.findAll({raw:true})
    res.render('users/all', { data })
   }

   static async removeUser(req,res){

    const id = req.body.id

    await User.destroy({where:{id}})
    res.render('users/all')
   }
   static showUser(req,res){

    const id = req.body.id

    const user = User.findOne({where:{id}})
    res.render('users/edit', { user })
   }
   static async updateUser(req,res){

    const id = req.body.id

    const data = {
      
      name:req.body.name,
      email:req.body.email
    }
      User.update(data, {where:{id}})
      res.redirect('users/all')
   }
}