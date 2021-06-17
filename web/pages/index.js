import Head from 'next/head'
import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import HeroHomePage from '../components/pageSections/HeroHomePage'
import PathWayHomePage from '../components/pageSections/PathWayHomePage'
import ServicesHomePage from '../components/pageSections/ServicesHomePage'
import PartnersHomePage from '../components/pageSections/PartnersHomePage'
import '../styles/global.scss'
const HomePage = ({title, hero, partners, pathways, services}) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <HeroHomePage props={hero} />
      <PathWayHomePage props={pathways} />
      <ServicesHomePage props={services} />
      <PartnersHomePage props={partners} />
    </>
  )
}

HomePage.getInitialProps = async (ctx) => {
  return client
    .fetch(
      groq`*[_type == "homePage" ][0]{
             content{title, hero, partners, pathways, services}
          }`
    )
    .then((res) => ({...res.content}))
}

HomePage.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  partners: PropTypes.object,
  pathways: PropTypes.object,
  services: PropTypes.object
}
export default HomePage
