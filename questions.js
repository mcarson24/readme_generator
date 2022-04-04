export default [
  {
    name: 'title',
    message: 'Project Title:',
    validate: (input, answers) =>  {
      if (!input.length) return 'A Project Title is required'
      return true
    },
    filter: input => `# ${input}`,
  },
  {
    name: 'description',
    message: 'Description:',
    type: 'editor',
    filter: input => `## Description\n${input}`
  },
  // {
  //   name: 'instructions',
  //   message: 'Installation instructions' 
  // },
  // {
  //   name: 'usage',
  //   message: 'Usuage information'
  // },
  // {
  //   name: 'guidelines',
  //   message: 'Contribution guidelines'
  // }, {
  //   name: 'test',
  //   message: 'Test instructions'
  // }
]