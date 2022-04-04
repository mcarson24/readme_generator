export default [
  {
    name: 'title',
    message: 'Project Title:',
    validate (input)  {
      if (input.length) return true
      return 'A Project Title is required'
    }
  },
  {
    name: 'description',
    message: 'Description:'
  },
  {
    name: 'instructions',
    message: 'Installation instructions' 
  },
  {
    name: 'usage',
    message: 'Usuage information'
  },
  {
    name: 'guidelines',
    message: 'Constribution guidelines'
  }, {
    name: 'test',
    message: 'Test instructions'
  }
]