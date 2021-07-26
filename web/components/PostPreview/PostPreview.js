import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames/bind'

import NextImage from '@/components/NextImage'
import styles from './postPreview.module.scss'

const PostPreview = ({postPreview, releaseDate, timeToRead, pageSlug, imageSize, cardStyle}) => {
  const {image, title, description} = postPreview
  return (
    <Link href={pageSlug}>
      <div className={classNames(styles.card, styles[cardStyle])}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.dateWrapper}>
            <span>{releaseDate}</span>
            <span> {timeToRead}</span>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <NextImage link={image} alt={image.alt} width={imageSize.width} height={imageSize.height} />
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
