import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from 'react-icons/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  !['pagesList', 'route', 'site-config', 'testimonialsPage', 'homePage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(S.editor().id('config').schemaType('site-config').documentId('global-config')),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        // .schemaType('pagesList')
        .child(
          // S.documentTypeList('pagesList')
          // .title('Pages')

          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home page')
                .schemaType('homePage')
                .child(S.documentTypeList('homePage').title('Home page')),
              S.listItem()
                .title('Testimonials page')
                .schemaType('testimonialsPage')
                .child(S.documentTypeList('testimonialsPage').title('Testimonials page'))
            ])
        ),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
