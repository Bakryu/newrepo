import SLUGS from '../../constants/slugs'

export default {
  name: 'growPage',
  type: 'document',
  title: 'Grow',
  initialValue: {
    pageSlug: SLUGS.GROW
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
