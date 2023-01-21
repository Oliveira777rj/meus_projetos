const Appointment = require('../models/Appointment');

module.exports = class AppointmentController{

  static async register(req,res){

    res.render('appointment/register')
  }
  static async saveRegister(req,res){

    const { prontuario, name, medico, procedimento, data, observacoes } = req.body

    const registro ={

      prontuario,
      name,
      medico,
      procedimento,
      data,
      observacoes
    }

     await Appointment.create(registro)
     res.json('Agendado com sucesso')
  }

  static async all(req,res){
    res.render('appointment/view')
  }
  static async allView(req,res){

    const prontuarioPaciente = req.body.prontuario
    const data = await Appointment.find({prontuario:prontuarioPaciente})
    res.json({data})
  }
}
