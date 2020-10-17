const { Schema, model } = require('mongoose')
const schema = new Schema({
    id:{
        type: String,
        required: false
    },
    name: {
        type: String,
        
        required: true
      },
      phone: {
        type: String,

        required: true
      },
      
      weight: {
        type: Number,
        
        required: true
      },
      kind_of_transport: {
        type: String,
        
        required: true
      },
      creative: {
        type:Number,
        
        required: false
      }
      
})
module.exports = model('courier', schema)//edit_p
