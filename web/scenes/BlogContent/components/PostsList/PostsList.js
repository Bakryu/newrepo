import PropTypes from 'prop-types'

import PostPreview from '@/components/PostPreview'
import styles from './postsList.module.scss'

const PostsList = ({posts}) => {
  return (
    <div className={styles.list}>
      {posts?.map(({postPreview, releaseDate, timeToRead, pageSlug, category}, idx) => {
        return (
          <PostPreview
            postPreview={postPreview}
            releaseDate={releaseDate}
            timeToRead={timeToRead}
            pageSlug={pageSlug}
            category={category}
            imageSize={{width: 300, height: 210}}
            key={idx}
          />
        )
      })}
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array
}
export default PostsList
