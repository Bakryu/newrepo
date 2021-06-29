export default {
  name: 'navigationGroup',
  title: 'Navigation Group ',
  type: 'object',
  fields: [
    {
      name: 'group',
      type: 'array',
      title: 'Navigation Item',
      validation: Rule => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items')
      ],
      of: [
        {
          type: 'navigationItem',
         
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
