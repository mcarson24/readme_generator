import fs from 'fs'
import path from 'path'
import inquirer from 'inquirer'
import ReadMeBuilder from './src/Builder.js'
import { questions } from './src/questions.js'

inquirer
  .prompt(questions)
  .then(answers => {
    if (fs.existsSync(path.join(process.cwd(), './README.md'))) fs.unlinkSync('./README.md', err => console.error(err))
    const builder = new ReadMeBuilder(answers)
    fs.appendFileSync('./README.md', builder.createBody(), err => {
      if (err) console.error(err)
    })
  })
  .catch(err => console.error(err))
