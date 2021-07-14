import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'
import ProcessContent from '@/scenes/ProcessContent'

const Process = ({processContent}) => {
  return <ProcessContent processContent={processContent} />
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "processPage"][0]{
        processContent{
          ...,
          processList[]{
            title,
            image,
            alt,
            description
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

Process.propTypes = {
  processContent: PropTypes.object
}

export default Process
