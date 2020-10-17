const { Schema, model } = require('mongoose')
const { stringify } = require('querystring')
const schema = new Schema({
    id:{
        type: Number,
        required: false
    },
    name: {
        type: String,
        
        required: true
      },
    number_tlephone: {
        type: Number,
        
        required: true
      },
      

    start_adress:{
        type:String,
        required: true,

    },

    end_adress:{
        type:String,
        required: true,

    },

    wieght: {
        type: Number,
        
        required: true
      },
      kind_of_transport: {
        type: String,
        
        required: true
      },
      creative: {
        type: Number,
        
        required: true
      }
      
})
module.exports = model('order', schema)//edit_please_dima
