import bcp47 from 'bcp47'

export default {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: ['update', 'publish'],

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title'
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url'
    },
    {
      name: 'frontpage',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'pagesList' }
    },
    {
      title: 'Site language',
      description: 'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((lang) => (bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'))
    },
    {
      title: 'Brand logo',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'mainNavigation',
      type: 'navigationGroup',
      title: 'Main navigation',
      description: 'Select pages for the top menu'
    },
    {
      title: 'Footer navigation items',
      name: 'footerNavigation',
      type: 'object',

      fields: [
        {
          name: 'firstColumn',
          type: 'navigationGroup',
          title: 'First column'
        },
        {
          name: 'secondColumn',
          type: 'navigationGroup',
          title: 'Second column'
        }
      ]
    },
    {
      name: 'contacts',
      type: 'contacts',
      Title: 'Contacts'
    },
    {
      name: 'terms',
      type: 'terms',
      title: 'Terms'
    },
    {
      name: 'buttons',
      type: 'object',
      title: 'Button texts',
      fields: [
        {
          name: 'buttonSendRequest',
          type: 'string',
          title: 'Send request'
        }
      ]
    }
  ]
}
