export default {
  name: 'navigationGroup',
  title: 'Navigation Group ',
  type: 'object',
  fields: [
    {
      name: 'secondColumn',
      type: 'array',
      title: 'Navigation List',
      validation: Rule => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items')
      ],
      of: [
        {
          type: 'navigationItem'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
