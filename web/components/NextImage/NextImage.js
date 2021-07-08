import Image from 'next/image'
import getUrl from '@/helpers/getUrl'
import styles from './nextImage.module.scss'

const NextImage = ({link, alt}) => {
  const url = getUrl(link).url()
  return (
    <div className={styles.image}>
      <Image src={url} layout="fill" alt={alt} />
    </div>
  )
}

export default NextImage
