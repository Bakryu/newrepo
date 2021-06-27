import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
import '../styles/global.scss'

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "slug": page->pageSlug,
      "title": page->title
    }
  }[0]
  `
const siteFormQuery = `
  *[_type == "formList"][0]
  `

class App extends BaseApp {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const getConfig = async () => {
      const config = await client.fetch(siteConfigQuery).then((config) => {
        return config
      })
      const formQuery = await client.fetch(siteFormQuery).then((form) => {
        return form
      })

      pageProps.config = {...config, ...formQuery}

      return {pageProps}
    }
    // Add site config from sanity
    return getConfig()
  }

  render() {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}

export default App
