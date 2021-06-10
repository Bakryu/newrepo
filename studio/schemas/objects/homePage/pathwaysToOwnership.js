export default {
  type: 'object',
  name: 'pathwaysToOwnership',
  title: 'Pathways to ownership',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'pathways',
      type: 'object',
      title: 'Pathways array',
      fields: [
        {
          type: 'object',
          name: 'pathwayItem',
          title: 'Pathway item',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Pathway title',
            },
            {
              name: 'subTitle',
              type: 'string',
              title: 'Pathway SubTitle',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Pathway description',
            },
            {
              name: 'linkName',
              type: 'string',
              title: 'Pathway link name',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Pathway link',
            },
          ],
        },
      ],
    },
    {
      name: 'pathwaysImage',
      type: 'image',
      title: 'Pathways image',
    },
  ],
}
