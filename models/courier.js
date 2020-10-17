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
      type: {
        type: String,
        required: true
      },
      rating: {
        type:Number,
        required: false
      }
      
})
module.exports = model('courier', schema)//edit_p
