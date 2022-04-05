let license

const setLicense = inputLicense => {
  license = inputLicense
}

const questions = [
  {
    name: 'title',
    message: 'Project Title:',
    validate: input =>  {
      if (!input.length) return 'A Project Title is required'
      return true
    },
    // filter: input => `# ${input}\n <BADGE HERE>\n`,
  },
  {
    name: 'description',
    message: 'Description:',
    type: 'editor',
    validate: input =>  {
      if (!input.length) return 'A description is required'
      return true
    },
    // filter: input => `## Description\n${input}\n`
  },
  {
    name: 'license',
    message: 'Choose a license',
    type: 'list',
    choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0'],
    filter: input => {
      setLicense(input)
      return input
    },
  },
  {
    name: 'installation',
    message: 'Installation instructions' ,
    // filter: input => `## Installation Instructions\n${input}\n`
  },
  {
    name: 'usage',
    message: 'Usuage information',
    // filter: input => `## Usage\n${input}\n`
  },
  {
    name: 'contribution',
    message: 'Contribution guidelines',
    // filter: input => `## Contribution Guidelines\n${input}\n`
  }, {
    name: 'test',
    message: 'Test instructions',
    // filter: input => `## Tests\n${input}\n`
  },
  {
    name: 'github',
    message: 'Github username',
    filter: (input, answers) => {
      answers.Questions = `Have additional questions? I can be reached at [Github](https://github.com/${input})`
      return input
    }
  },
  {
    name: 'email',
    message: 'E-mail address',
    filter: (input, answers) => {
      answers.Questions += ` or you can e-mail me at ${input}.\n`
      return input
    }
  }
]

export { questions, license }