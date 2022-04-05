import fs from 'fs'
import inquirer from 'inquirer'
import licenses  from './src/licenses.js'
import { questions, license } from './src/questions.js'

const buildReadMe = answers => {
  for (const answer in answers) {
    let section = ''
    if (['github', 'email', 'questions'].includes(answer)) return

    if (answer === 'title') {
      section += `# ${answers[answer]}\n`
    } else {
      section += `## ${answer}\n`
    }

    if (answer === 'title') {
      section += `![License](https://img.shields.io/badge/License-${license}-white?labelColor=green&style=flat)\n`
    } else if (answer === 'License') {
      section += `${licenses[license]}\n`
    } else {
      section += `${answers[answer]}\n`
    }
    fs.appendFileSync('./README.md', section, err => {
      if (err) console.error(err)
    })
  }
}

inquirer
  .prompt(questions)
  .then(answers => {
    fs.unlinkSync('./README.md', err => console.error(err))
    buildReadMe(answers)
  })
  .catch(err => console.error(err))
