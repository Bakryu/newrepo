export default {
  name: 'pagesList',
  type: 'document',
  title: 'Pages',
  fields: [
    // {
    // of: [
    {
      name: 'testimonialsPage',
      type: 'testimonialsPage',
      title: 'Testimonials page',
    },
    {
      name: 'homePage',
      type: 'homePage',
      title: 'Home page',
    },
    // ],
    // },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
