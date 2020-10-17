
const { Schema, model } = require('mongoose')
const { stringify } = require('querystring')
const schema = new Schema({
    id:{
        type: String,
        required: false
    },
    name: {
        type: String,
        
        required: true
      },
      from_city: {
        type: String,
        
        required: true
      },
      from_building: {
        type: String,
        
        required: true
      },
      from_flat: {
        type: String,
        
        required: true
      },
      to_city: {
        type: String,
        
        required: true
      },
      to_street: {
        type: String,
        
        required: true
      },
      to_building: {
        type: String,
        
        required: true
      },
      to_flat: {
        type: String,
        
        required: true
      },
     phone: {
        type: String,
        
        required: true
      },
      date: {
        type: Date,
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
        type: Number,
        required: false
      }
      
})
module.exports = model('order', schema)//edit_please_dima
