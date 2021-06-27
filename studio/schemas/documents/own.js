import SLUGS from '../../constants/slugs'

export default {
  name: 'ownPage',
  type: 'document',
  title: 'Own',
  initialValue: {
    pageSlug: SLUGS.OWN
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug',
      readOnly: true
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}