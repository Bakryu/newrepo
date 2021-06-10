export default {
  type: 'object',
  name: 'homePathways',
  title: 'Pathways to ownership',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    { name: 'own', type: 'pathwaysItem', title: 'Pathways Item' },
    { name: 'grow', type: 'pathwaysItem', title: 'Pathways Item' },
    { name: 'transition', type: 'pathwaysItem', title: 'Pathways Item' },

    {
      name: 'pathwaysImage',
      type: 'image',
      title: 'Pathways image'
    }
  ]
}
