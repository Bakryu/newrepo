import client from '../client'
import groq from 'groq'
import PropTypes from 'prop-types'
import FAQContent from '@/scenes/FAQContent'

const Faq = ({faqContent}) => {
  return <FAQContent faqContent={faqContent} />
}

export async function getStaticProps() {
  const data = await client
    .fetch(
      groq`*[_type == "faqPage"][0]{
        faqContent{
          title,
          list[]{
            title,
            "list":groupList.list[]{
              title,
              description,
              descriptionList
            }
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

Faq.propTypes = {
  faqContent: PropTypes.object
}

export default Faq
