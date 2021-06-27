import SLUGS from '../../constants/slugs'

export default {
  name: 'faqPage',
  type: 'document',
  title: 'FAQ',
  initialValue: {
    pageSlug: SLUGS.FAQ
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
