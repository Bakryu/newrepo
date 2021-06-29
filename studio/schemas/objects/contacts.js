export default {
  name: 'contacts',
  type: 'object',
  Title: 'Contacts',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'phoneNumber',
      type: 'object',
      title: 'Phone Number',
      fields: [
        {
          name: 'placeholder',
          type: 'string',
          title: 'Phone Number placeholder',
          description: 'This field carries a decorative load'
        },
        {
          name: 'number',
          type: 'string',
          title: 'Phone Number',
          description: 'This is the number by which you can be contacted'
        }
      ]
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          name: 'socialsItem',
          type: 'object',
          title: 'Socials Item',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Socials Item Image'
            },
            {
              name: 'link',
              type: 'string',
              title: 'Socials Item link'
            }
          ],
          preview: {
            select: {
              title: 'link'
            }
          }
        }
      ]
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    }
  ]
}
