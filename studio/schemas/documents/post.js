export default {
  name: 'postPage',
  type: 'document',
  title: 'Post page',
  fields: [
    {
      name: 'pageSlug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'timeToRead',
      type: 'string',
      title: 'Time to Read',
      description: 'Enter the time in this format (8 min read)'
    },
    {
      name: 'releaseDate',
      type: 'string',
      title: 'Release date',
      description: 'Enter the date in this format (Jun 3)'
    },
    { name: 'bodyPortableText', type: 'bodyPortableText' },
    {
      name: 'recommendation',
      type: 'array',
      title: 'Recommendation',
      validation: (Rule) => Rule.required().max(3),
      of: [{ name: 'post', type: 'reference', to: [{ type: 'postPage' }] }]
    },
    {
      name: 'previewGroupTitle',
      type: 'string',
      title: 'Preview Group Title'
    },
    {
      name: 'postPreview',
      type: 'postPreview',
      title: 'Post Preview'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
