import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import HeroHomePage from '../components/pageSections/HeroHomePage'
import PathWayHomePage from '../components/pageSections/PathWayHomePage'
import ServicesHomePage from '../components/pageSections/ServicesHomePage'
import PartnersHomePage from '../components/pageSections/PartnersHomePage'

const HomePage = ({hero, partners, pathways, services}) => {
  return (
    <>
      <HeroHomePage props={hero} />
      <PathWayHomePage props={pathways} />
      <ServicesHomePage props={services} />
      <PartnersHomePage props={partners} />
    </>
  )
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "homePage" ][0]{
            title,partners, pathways,services,
            hero{title, subTitle, proposition,
            propositionList,heroBg,
            video{videoPoster,
            "videoUrl": videoUrl.asset->url
          }
        }  
      }`
    )
    .then((res) => {
      return {...res}
    })

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {...data}
  }
}

HomePage.propTypes = {
  title: PropTypes.string,
  hero: PropTypes.object,
  partners: PropTypes.object,
  pathways: PropTypes.object,
  services: PropTypes.object
}
export default HomePage
