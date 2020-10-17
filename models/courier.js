const { Schema, model } = require('mongoose')
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
module.exports = model('coutier', schema)//edit_please_dima
