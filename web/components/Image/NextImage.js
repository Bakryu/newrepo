import Image from 'next/image'
import styles from './nextImage.module.scss'

const NextImage = ({src}) => {
  return <Image src={src} className={styles.image} />
}

export default NextImage
