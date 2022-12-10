const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  logType: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Log', logSchema)