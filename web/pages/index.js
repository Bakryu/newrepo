import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '../components/MainContainer'
import HeroHomePage from '../components/pageSections/HeroHomePage'
import PathWayHomePage from '../components/pageSections/PathWayHomePage'
import ServicesHomePage from '../components/pageSections/ServicesHomePage'
import PartnersHomePage from '../components/pageSections/PartnersHomePage'

import '../styles/global.scss'
const HomePage = ({title, hero, partners, pathways, services}) => {
  return (
    <MainContainer title={title}>
      <HeroHomePage props={hero} />
      <PathWayHomePage props={pathways} />
      <ServicesHomePage props={services} />
      <PartnersHomePage props={partners} />
    </MainContainer>
  )
}

HomePage.getInitialProps = async (ctx) => {
  return client
    .fetch(
      groq`*[_type == "homePage" ][0]{
            content{title,partners, pathways,services,
            hero{title, subTitle, proposition,
            propositionList,heroBg,videoPoster,
            heroVideo{"homePageVideo": asset->url}}
          }}`
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
