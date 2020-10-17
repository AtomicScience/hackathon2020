const { Schema, model } = require('mongoose')
const { stringify } = require('querystring')
const schema = new Schema({
    id:{
        type: int,
        required: false
    },
    name: {
        type: String,
        
        required: true
      },
    number_tlephone: {
        type: int,
        
        required: true
      },
      

    start_adress:{
        type:string,
        required: true,

    },

    end_adress:{
        type:string,
        required: true,

    },

    wieght: {
        type: int,
        
        required: true
      },
      kind_of_transport: {
        type: String,
        
        required: true
      },
      creative: {
        type: int,
        
        required: true
      }
      
})
module.exports = model('order', schema)//edit_please_dima
