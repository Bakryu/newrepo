export default {
  name: 'ownGrowTransitionPage',
  type: 'object',
  title: 'Page Data',
  fields: [
    {
      name: 'pageRouts',
      type: 'object',
      title: 'Routs',
      fields: [
        {
          name: 'routName',
          type: 'string',
          title: 'Rout Name'
        },
        {
          name: 'routLink',
          type: 'reference'
        }
      ]
    },
    {
      name: 'pageTitle',
      type: 'string',
      title: 'Page Title'
    },
    {
      name: 'pageQuestions',
      type: 'array',
      title: 'Page Questions',
      of: [
        {
          name: 'question',
          type: 'string',
          title: 'Questions'
        }
      ]
    },
    {
      name: 'weCanHelp',
      type: 'string',
      title: 'We can help'
    },
    {
      name: 'video',
      type: 'video'
    },
    {}
  ]
}
