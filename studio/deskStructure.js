import S from '@sanity/desk-tool/structure-builder'
import { MdDashboard, MdSettings } from 'react-icons/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) =>
  ![
    'pagesList',
    'route',
    'site-config',
    'testimonialsPage',
    'homePage',
    'formList',
    'privacyPolicyPage',
    'termsOfUsePage'
  ].includes(listItem.getId())

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
        .child(
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
                .child(S.documentTypeList('testimonialsPage').title('Testimonials page')),
              S.listItem()
                .title('Privacy Policy')
                .schemaType('privacyPolicyPage')
                .child(S.documentTypeList('privacyPolicyPage').title('Privacy Policy')),
              S.listItem()
                .title('Terms of Use')
                .schemaType('termsOfUsePage')
                .child(S.documentTypeList('termsOfUsePage').title('Terms of Use'))
            ])
        ),
      S.listItem()
        .title('Forms')
        .icon(MdDashboard)
        .child(
          S.list()
            .title('Form')
            .items([
              S.listItem()
                .title('Connect with us Form')
                .schemaType('formList')
                .child(
                  S.documentTypeList('formList').id('connectWithUs').title('Connect with us Form')
                )
            ])
        ),
      S.listItem()
        .title('Routes')
        .schemaType('route')
        .child(S.documentTypeList('route').title('Routes')),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
