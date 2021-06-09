export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bf64ad1876720cc48c2240',
                  title: 'Sanity Studio',
                  name: 'koydol-full-website-studio',
                  apiId: '6fb9208b-3983-430f-8e5c-5eed5ccb8028'
                },
                {
                  buildHookId: '60bf64adc8c32411c313ff7e',
                  title: 'Koydol',
                  name: 'koydol-full-website',
                  apiId: 'ec463754-7ea6-4c5e-b62f-34a5078f9963'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Halo-Lab/koydol-full-website.git',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://koydol-full-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
