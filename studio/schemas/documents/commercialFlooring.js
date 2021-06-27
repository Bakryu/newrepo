import SLUGS from '../../constants/slugs'

export default {
  name: 'commercialFlooringPage',
  type: 'document',
  title: 'Commercial Flooring',
  initialValue: {
    pageSlug: SLUGS.COMMERCIAL_FLOORING
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
