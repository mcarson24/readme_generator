import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import licenses  from './src/licenses.js'
import { questions, license } from './src/questions.js'

const buildTableOfContents = answers => {
  let tableOfContents = '## Table of Contents\n'
  Object.keys(answers).forEach(answer => {
    tableOfContents += `- [${answer}](#${answer})\n`
    if (answer === 'email') tableOfContents += '- [Questions](Questions)'
    if (answer === 'github') return
  })
  return `${tableOfContents}`
}

const buildReadMe = answers => {
  // TODO: Create a table of contents!
  let section = `# ${answers['title']}\n
![License](https://img.shields.io/badge/License-${license}-white?labelColor=green&style=flat)\n
${buildTableOfContents(answers)}\n`
  for (const answer in answers) {
    if (!['title', 'github', 'email'].includes(answer)) {
      section += `## ${answer}\n`
      
      if (answer === 'License') {
        section += `${licenses[license]}\n`
      } else {
        section += `${answers[answer]}\n`
      }
      fs.appendFileSync('./README.md', section, err => {
        if (err) console.error(err)
      })
      section = ''
    }
  }
}

inquirer
  .prompt(questions)
  .then(answers => {
    if (path.join(process.cwd(), './README.md')) fs.unlinkSync('./README.md', err => console.error(err))
    buildReadMe(answers)
  })
  .catch(err => console.error(err))
