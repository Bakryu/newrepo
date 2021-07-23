import PropTypes from 'prop-types'
import Link from 'next/link'

import NextImage from '@/components/NextImage'
import styles from './postPreview.module.scss'

const PostPreview = ({postPreview, releaseDate, timeToRead, pageSlug}) => {
  const {image, title, description} = postPreview
  return (
    <Link href={pageSlug}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.dateWrapper}>
          <span>{releaseDate}</span>
          <span> {timeToRead}</span>
        </div>
        <p className={styles.description}>{description}</p>

        <NextImage link={image} alt={image.alt} width={320} height={210} />
      </div>
    </Link>
  )
}

PostPreview.propTypes = {
  postPreview: PropTypes.object,
  releaseDate: PropTypes.string,
  timeToRead: PropTypes.string,
  pageSlug: PropTypes.string
}
export default PostPreview
