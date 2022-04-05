import fs from 'fs'
import inquirer from 'inquirer'
import licenses  from './licenses.js'
import { questions, license } from './questions.js'

const buildReadMe = answers => {
  for (const answer in answers) {
    if (['github', 'email', 'questions'].includes(answer)) return
    let section = ''
    if (answer === 'title') {
      section += `# ${answers[answer]}\n`
    } else {
      section += `## ${answer}\n`
    }
    if (answer === 'title') {
      section += `![License](https://img.shields.io/badge/License-${license}-white?labelColor=green&style=flat)\n`
    } else if (answer === 'license') {
      section += `${licenses[license]}\n`
    } else {
      section += `${answers[answer]}\n`
    }
    fs.appendFileSync('README.md', section, err => {
      if (err) console.error(err)
    })
  }
}

inquirer
  .prompt(questions)
  .then(answers => buildReadMe(answers))
  .then(() => {
    let file = fs.readFileSync('./README.md', { encoding:'utf8', flag:'r' })
    file = file.replace(/<BADGE HERE>/, `![License](https://img.shields.io/badge/License-${license}-white?labelColor=green&style=flat)\n`)
    fs.writeFileSync('./README.md', file)
  })
  .catch(err => console.error(err))
