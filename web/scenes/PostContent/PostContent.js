import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'

import PostPreview from '@/components/PostPreview'
import styles from './postContent.module.scss'

const PostContent = ({bodyPortableText, recommendation, releaseDate, timeToRead, title}) => {
  return (
    <section className={styles.post}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.dateWrapper}>
        <span>{releaseDate}</span>
        <span> {timeToRead}</span>
      </div>
      <BlockContent
        className={styles.blockContent}
        blocks={bodyPortableText}
        projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_DATASET}
        imageOptions={{w: 736, h: 437, fit: 'max'}}
      />
      <div className={styles.cardWrapper}>
        {recommendation.map(({pageSlug, postPreview, releaseDate, timeToRead}, idx) => {
          return (
            <PostPreview
              pageSlug={pageSlug}
              postPreview={postPreview}
              releaseDate={releaseDate}
              timeToRead={timeToRead}
              key={idx}
            />
          )
        })}
      </div>
    </section>
  )
}

PostContent.propTypes = {
  bodyPortableText: PropTypes.array,
  recommendation: PropTypes.array,
  releaseDate: PropTypes.string,
  timeToRead: PropTypes.string,
  title: PropTypes.string,
  pageSlug: PropTypes.string
}
export default PostContent
