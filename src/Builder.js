import licenses  from './licenses.js'

export default class ReadMeBuilder {
  constructor(answers) {
    this.answers = answers
    this.ignore = ['github', 'email', 'sections', 'title']
  }

  createTableOfContents() {
    let tableOfContents = '## Table of Contents\n'

    // Create an entry in the table of contents for each required section
    Object.keys(this.answers).forEach(answer => {
      if (this.ignore.includes(answer)) return
      tableOfContents += `- [${answer}](#${answer})\n`
    })

    return tableOfContents
  }

  createBody() {
    let body = ''
    // The first section will include the title, description, and a table of contents.
    let section = `# ${this.answers['title']}\n`
    this.answers.sections.includes('License') ? section += `![License](https://img.shields.io/badge/License-${this.answers.License}-white?labelColor=green&style=flat)\n` : ''
    
    section += `${this.createTableOfContents()}\n`
    
    // Create remaining sections
    for (const answer in this.answers) {
      if (!this.ignore.includes(answer)) {
        section += `## ${answer}\n`
        // Add the license body into the generated README
        if (answer === 'License') {
          section += `${licenses[this.answers.License]}\n`
        } else {
          section += `${this.answers[answer]}\n`
        }
        // Add the curent section to the body
        body += section
        // Reset the section
        section = ''
      }
    }
    return body
  }
}