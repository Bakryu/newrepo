export default {
  name: 'homePage',
  type: 'document',
  title: 'Home page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'content',
      type: 'object',
      title: 'Page sections',
      fields: [
        { name: 'hero', type: 'homeHero' },
        { name: 'pathways', type: 'homePathways' },
        { name: 'services', type: 'homeServices' },
        { name: 'partners', type: 'homePartners' }
      ]
    }
  ],

  preview: {
    select: {
      title: 'title'
    }
  }
}
