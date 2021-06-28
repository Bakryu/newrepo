import SLUGS from '../../constants/slugs'

export default {
  name: 'initialFeesPage',
  type: 'document',
  title: 'Initial Fees',
  initialValue: {
    pageSlug: SLUGS.INITIAL_FISTS
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