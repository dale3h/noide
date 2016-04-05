var Nes = require('nes/client')
var host = window.location.host
var client = new Nes.Client((window.location.protocol=="https:"?"wss://":"ws://") + host + window.location.pathname)

module.exports = client
