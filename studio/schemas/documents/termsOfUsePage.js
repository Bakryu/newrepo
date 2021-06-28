export default {
  name: 'termsOfUsePage',
  type: 'document',
  title: 'Terms of Use',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
