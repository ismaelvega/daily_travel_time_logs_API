const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  leftAt: {
    type: String,
    required: false
  },
  pickedUpAt: {
    type: String,
    required: false
  },
  arrivedAt: {
    type: String,
    required: false
  },
  atBus: {
    type: String,
    required: false
  },
  busArrivedAt: {
    type: String,
    required: false
  },
  atSubway: {
    type: String,
    required: false
  },
  subwayArrivedAt: {
    type: String,
    required: false
  },
  atWork: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('Log', logSchema)