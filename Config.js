'use strict'
const fs = require('fs')


class Config {
  constructor (newObj) {

      this.rules = newObj.rules

    }




        static parseFromFilePath(filePath)  //fileStream with JSON
          {

            let x = (JSON.parse(fs.readFileSync(filePath)))

            return x
          }

        }

        module.exports = {
          Config
}





//console.log('Asked the question')
