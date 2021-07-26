import client from '../../client'
import groq from 'groq'
import PropTypes from 'prop-types'

import MainContainer from '@/components/MainContainer'
import PostContent from '@/scenes/PostContent'

const Post = ({
  config,
  formQuery,
  bodyPortableText,
  postPreview,
  recommendation,
  releaseDate,
  timeToRead,
  title,
  pageSlug,
  previewGroupTitle
}) => {
  return (
    <MainContainer config={config} connectWithUsForm={formQuery}>
      <PostContent
        bodyPortableText={bodyPortableText}
        postPreview={postPreview}
        recommendation={recommendation}
        releaseDate={releaseDate}
        timeToRead={timeToRead}
        title={title}
        pageSlug={pageSlug}
        previewGroupTitle={previewGroupTitle}
      />
    </MainContainer>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "postPage" ][]{pageSlug}`).then((res) => {
    return [...res]
  })

  return {
    paths: paths?.map(({pageSlug}) => ({params: {post: pageSlug}})),
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const slug = params.post
  const data = await client
    .fetch(
      groq`*[_type == "postPage" && pageSlug == "${slug}"][0]{
          ...,
        recommendation[]->{
            bodyPortableText,
            previewGroupTitle,
            pageSlug,
            title,
            timeToRead,
            releaseDate,
            postPreview{
                description,
                image,
                title
            },
            
        }
         
      }
          `
    )
    .then((res) => {
      return {...res}
    })

  return {
    props: {...data}
  }
}

Post.propTypes = {
  config: PropTypes.object,
  formQuery: PropTypes.object,
  bodyPortableText: PropTypes.array,
  postPreview: PropTypes.object,
  recommendation: PropTypes.array,
  releaseDate: PropTypes.string,
  timeToRead: PropTypes.string,
  title: PropTypes.string,
  pageSlug: PropTypes.string
}

export default Post
