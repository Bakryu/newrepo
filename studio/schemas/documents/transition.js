import SLUGS from '../../constants/slugs'

export default {
  name: 'transitionPage',
  type: 'document',
  title: 'Transition',
  initialValue: {
    pageSlug: SLUGS.TRANSITION
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
