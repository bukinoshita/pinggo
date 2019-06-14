// Packages
const { exec } = require('child_process')

const pinggo = (ip = 'localhost') => {
  return new Promise((resolve, reject) => {
    const callback = (err, stdout, sterr) => {
      if (err || sterr) {
        return reject(new TypeError('Could not reach servers'))
      }

      resolve(stdout.replace('\n', ''))
    }

    exec(`ping -c 4 ${ip} | tail -1 | awk '{print $4}' | cut -d '/' -f 2`, callback)
  })
}

module.exports = pinggo
