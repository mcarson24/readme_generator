const includes = (answers, section) => answers.sections.includes(section)

export default [
  {
    name: 'sections',
    message: 'Which sections do you want to include in your README?',
    type: 'checkbox',
    choices: ['License', 'Installation', 'Usage', 'Contribution', 'Test', 'Github', 'E-mail']
  },
  {
    name: 'title',
    message: 'Project Title:',
    validate: input =>  {
      if (!input.length) return 'A Project Title is required'
      return true
    },
  },
  {
    name: 'Description',
    message: 'Description:',
    type: 'editor',
    validate: input =>  {
      if (!input.length) return 'A description is required'
      return true
    },
  },
  {
    name: 'License',
    message: 'Choose a license',
    type: 'list',
    choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0'],
    when: answers => includes(answers, 'License')
  },
  {
    name: 'Installation',
    message: 'Installation instructions' ,
    when: answers => includes(answers, 'Installation')
  },
  {
    name: 'Usage',
    message: 'Usuage information',
    when: answers => includes(answers, 'Usage')
  },
  {
    name: 'Contribution',
    message: 'Contribution guidelines',
    when: answers => includes(answers, 'Contribution')
  }, {
    name: 'Test',
    message: 'Test instructions',
    when: answers => includes(answers, 'Test')
  },
  {
    name: 'github',
    message: 'Github username',
    filter: (input, answers) => {
      answers.Questions = `Have additional questions? I can be reached at [Github](https://github.com/${input})`
      return input
    },
    when: answers => includes(answers, 'Github')
  },
  {
    name: 'email',
    message: 'E-mail address',
    filter: (input, answers) => {
      answers.Questions += ` or you can e-mail me at ${input}.\n`
      return input
    },
    when: answers => includes(answers, 'E-mail')
  }
]