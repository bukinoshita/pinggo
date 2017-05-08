'use strict'

const {exec} = require('child_process')

const pinggo = (ip = 'localhost', cb) => exec(`ping -c 4 ${ip} | tail -1 | awk '{print $4}' | cut -d '/' -f 2`, cb)

module.exports = pinggo
