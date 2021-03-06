const bunyan = require('bunyan')
const path = require('path')
const utils = require('./utils')

const streams = []
if (utils.isDebug()) {
  streams.push({
    stream: process.stdout,
    level: 'debug'
  })
}

if (utils.isCI()) {
  streams.push({
    path: path.join(utils.getDatreeioDir(), 'debug.log'),
    level: 'debug'
  })
}

function get(name) {
  return bunyan.createLogger({
    name,
    streams
  })
}

module.exports = {
  get
}
