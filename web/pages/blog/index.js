import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'

const Blog = ({config, formQuery}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <span>Blog</span>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "blogPage"][0]`).then((res) => {
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

Blog.propTypes = {
  Blog: PropTypes.object
}

export default Blog
