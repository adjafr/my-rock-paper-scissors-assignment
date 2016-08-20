'use strict'




      const _ = require('lodash')
      const vorpal = require('vorpal')
      const {Config} = require('./Config')
      const path = require('path')

      const cli = vorpal()

      const config =
        Config
          .parseFromFilePath(
            path.resolve(__dirname, 'config.json')
          )

const configKeys = _.keys(config.rules)

cli
      .command("play <move>", 'What is your pick:  Rock, Paper or Scissors?')
        // .option
        .action(function (args, callback)

        {

          let compPick = Math.floor(Math.random() * 3)

          // this.log(compPick)

          let compString = ''

          if (compPick === 0) {
            compString = configKeys[0] // computer gets rock

              if (args.move === configKeys[0]) { // user picks rock
                console.log('Your enemy picked rock, its a DRAW')
              } else if (args.move === configKeys[1]) { // user picks paper
                console.log('Your enemy picked rock, YOU WIN')
              } else if (args.move === configKeys[2]) { // user picks scissors
                console.log('Your enemy picked rock, YOU LOSE')
              } else {
                console.log('Incorrect Value, must be Rock, Paper or Scissors')
              }
          }


              else if (compPick ===  1) {
                  compString = configKeys[1]  // computer gets paper

                  if (args.move === configKeys[0]) { // user picks rock
                    console.log('Your enemy picked Paper, YOU LOSE')
                  } else if (args.move === configKeys[1]) { // user picks paper
                    console.log('Your enemy picked Paper, its a DRAW')
                  } else if (args.move === configKeys[2]) { // user picks scissors
                    console.log('Your enemy picked Paper, YOU WIN')
                  } else {
                    console.log('Incorrect Value, must be Rock, Paper or Scissors')
                  }
              }

        else if (compPick ===  2) {
            compString = configKeys[2] // computer gets scissors

            if (args.move === configKeys[0]) { // user picks rock
              console.log('Your enemy picked Scissors, YOU WIN')
            } else if (args.move === configKeys[1]) { // user picks paper
              console.log('Your enemy picked Scissors, YOU LOSE')
            } else if (args.move === configKeys[2]) { // user picks scissors
              console.log('Your enemy picked Scissors, its a DRAW')
            } else {
              console.log('Incorrect Value, must be Rock, Paper or Scissors')
            }
        }

      console.log('you chose')
      callback()

    })

module.exports = (cli)
