export default {
    name: 'privacyPolicyPage',
    type: 'document',
    title: 'Privacy Policy',
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