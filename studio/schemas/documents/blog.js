import SLUGS from '../../constants/slugs'

export default {
  name: 'blogPage',
  type: 'document',
  title: 'Blog',
  initialValue: {
    pageSlug: SLUGS.BLOG
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
