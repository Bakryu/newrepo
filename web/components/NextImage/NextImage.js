import Image from 'next/image'
import getUrl from '@/helpers/getUrl'
import styles from './nextImage.module.scss'

const NextImage = ({link, alt}) => {
  const url = getUrl(link).url()
  const myLoader = ({src}) => {
    return `${src}`
  }
  return (
    <div className={styles.image}>
      <Image loader={myLoader} alt={alt} layout="fill" src={url} />
    </div>
  )
}

export default NextImage
