import licenses from './licenses.js'

export default [
  {
    name: 'title',
    message: 'Project Title:',
    validate: input =>  {
      if (!input.length) return 'A Project Title is required'
      return true
    },
    filter: input => `# ${input}`,
  },
  {
    name: 'description',
    message: 'Description:',
    type: 'editor',
    validate: input =>  {
      if (!input.length) return 'A description is required'
      return true
    },
    filter: input => `## Description\n${input}`
  },
  {
    name: 'installation',
    message: 'Installation instructions' ,
    filter: input => `## Installation Instructions\n${input}`
  },
  {
    name: 'usage',
    message: 'Usuage information',
    filter: input => `## Usage\n${input}`
  },
  {
    name: 'contribution',
    message: 'Contribution guidelines',
    filter: input => `## Contribution Guidelines\n${input}`
  }, {
    name: 'test',
    message: 'Test instructions',
    filter: input => `## Tests\n${input}`
  },
  {
    name: 'license',
    message: 'Choose a license',
    type: 'list',
    choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0'],
    filter: input => {
      return `## License\n${licenses[input]}`.replace(/\s4/g, '')
    },
  },
  {
    name: 'Github',
    message: 'Github username',
    filter: (input, answers) => {
      answers.questions = `#Questions?\n Have additional questions? I can be reached at [Github](https://github.com/${input})`
    }
  },
  {
    name: 'email',
    message: 'E-mail address',
    filter: (input, answers) => {
      answers.questions += ` or you can e-mail me at ${input}.`
    }
  }
]