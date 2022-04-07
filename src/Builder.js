import licenses  from './licenses.js'
import { license } from './questions.js'

export default class ReadMeBuilder {
  constructor(answers) {
    this.answers = answers
    this.doNotInclude = ['github', 'email', 'sections', 'title']
    this.body = ''
  }

  tableOfContents() {
    let tableOfContents = '## Table of Contents\n'

    Object.keys(this.answers).forEach(answer => {
      if (this.doNotInclude.includes(answer)) return
      tableOfContents += `- [${answer}](#${answer})\n`
    })

    return `${tableOfContents}`
  }

  createBody() {
    let section = `# ${this.answers['title']}\n
![License](https://img.shields.io/badge/License-${license}-white?labelColor=green&style=flat)\n
${this.tableOfContents(this.answers)}\n`
    for (const answer in this.answers) {
      if (!this.doNotInclude.includes(answer)) {
        section += `## ${answer}\n`
        // Add the license body into the generated README
        if (answer === 'License') {
          section += `${licenses[license]}\n`
        } else {
          section += `${this.answers[answer]}\n`
        }
  
        this.body += section
        // Reset the section
        section = ''
      }
    }
    return this.body
  }
}