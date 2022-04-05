import fs from 'fs'
import inquirer from 'inquirer'
import questions from './questions.js'

inquirer
  .prompt(questions)
  .then(answers => {
    for (const answer in answers) {
      if (['github', 'email'].includes(answer)) return
      fs.appendFileSync('README.md', answers[answer], err => {
        if (err) console.error(err)
      })
    }
  })
  .catch(err => console.error(err))
