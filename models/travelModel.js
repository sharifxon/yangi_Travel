const {model, Schema} = require('mongoose')

const traveSchema = new Schema({
    image:{
        required: true,
        type: String,
    },
    title:{
        required: true,
        type: String,
    },
    description:{
        required: true,
        type: String,
    }
})

module.exports = model('Travel', traveSchema )