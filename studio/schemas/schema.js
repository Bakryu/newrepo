// First, we must import the schema creator
// Document types
import pagesList from './documents/pages'
import route from './documents/route'
import siteConfig from './documents/siteConfig'
// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
// Landing page sections
import hero from './objects/hero'
import pathwaysToOwnership from './objects/homePage/pathwaysToOwnership'
import imageSection from './objects/imageSection'
import internalLink from './objects/internalLink'
import link from './objects/link'
import mailchimp from './objects/mailchimp'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import textSection from './objects/textSection'
// pages types
import homepage from './pagesItem/homepage'
import testimonials from './pagesItem/testimonials'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    testimonials,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    pagesList,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
    pathwaysToOwnership,
  ]),
})
