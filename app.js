import inquirer from 'inquirer'
import questions from './questions.js'

inquirer
  .prompt(questions)
  .then(answers => {
    console.log(answers)
    for (let answer in answers) {
      console.log(answers[answer])
    }
  })
  .catch(err => console.error(err))
