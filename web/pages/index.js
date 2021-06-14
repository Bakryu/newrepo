import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import HeroHomePage from '../components/pageSections/HeroHomePage'

const HomePage = ({title, hero, partners, pathways, services}) => {
  return (
    <>
      <HeroHomePage props={hero} />
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
