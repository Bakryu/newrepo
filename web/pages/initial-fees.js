import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'
import InitialFeesContent from '@/scenes/InitialFeesContent'

const InitialFees = ({initialFeesContent, config}) => {
  return (
    <InitialFeesContent
      initialFeesContent={initialFeesContent}
      buttonName={config.buttons.buttonSendRequest}
    />
  )
}

export async function getStaticProps(context) {
  const data = await client
    .fetch(
      groq`*[_type == "initialFeesPage"][0]{
        initialFeesContent{
          ...,
          expenditureList[]{
            expenditureFees,
            expenditureName
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

InitialFees.propTypes = {
  initialFeesContent: PropTypes.object
}

export default InitialFees
