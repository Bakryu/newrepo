import SLUGS from '../../constants/slugs'

export default {
  name: 'processPage',
  type: 'document',
  title: 'Process',
  initialValue: {
    pageSlug: SLUGS.PROCESS
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