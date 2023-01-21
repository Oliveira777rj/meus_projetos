const mongoose = require('../db/conn');
const { Schema } = require('mongoose')

const Appointment = mongoose.model(

  'Appointment',
  new Schema(

    {
      prontuario:{
        type:Number,
        required:true
      },
      name:{
        type:String,
        required:true
      },
      medico:{
        type:String,
        required:true
      },
      procedimento:{
        type:Array,
        required:true
      },
      data:{
        type:Date
      },
      observacoes:{
        type:String,
        required:true
      }
    }
  )
)
module.exports = Appointment;