import Image from 'next/image'
import getUrl from '@/helpers/getUrl'
import styles from './nextImage.module.scss'

const NextImage = ({link, alt}) => {
  const url = getUrl(link).url()
  const myLoader = ({layout, src}) => {
    return `${src}?l=${layout}`
  }
  return (
    <div className={styles.image}>
      <Image loader={myLoader} alt={alt} layout="fill" src={url} />
    </div>
  )
}

export default NextImage
