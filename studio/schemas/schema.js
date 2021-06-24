// First, we must import the schema creator
// Document types
import pagesList from './documents/pages'
import route from './documents/route'
import forms from './documents/forms'
import siteConfig from './documents/siteConfig'
import homepage from './documents/homepage'
import testimonials from './documents/testimonials'
import privacyPolicyPage from './documents/privacyPolicyPage'
import termsOfUsePage from './documents/termsOfUsePage'
// Object types
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import hero from './objects/hero'
import pathwaysItem from './objects/homePage/object/pathwaysItem'
import servicesItem from './objects/homePage/object/servicesItem'
//  page sections
import homeHero from './objects/homePage/sections/homeHero'
import homePartners from './objects/homePage/sections/homePartners'
import homePathways from './objects/homePage/sections/homePathways'
import homeServices from './objects/homePage/sections/homeServices'
import connectWithUs from './objects/forms/connectWithUs'
import imageSection from './objects/imageSection'
import internalLink from './objects/internalLink'
import link from './objects/link'
import mailchimp from './objects/mailchimp'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import textSection from './objects/textSection'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // documents
    route,
    siteConfig,
    pagesList,
    forms,

    // pages
    homepage,
    testimonials,
    privacyPolicyPage,
    termsOfUsePage,

    // page elements
    homeHero,
    homePathways,
    homeServices,
    homePartners,
    pathwaysItem,
    servicesItem,

    connectWithUs,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    portableText,
    simplePortableText,
    textSection
  ])
})
