import Image from 'next/image'
// import styles from './nextImage.module.scss'

const StaticImage = ({link, alt}) => {
  const myLoader = ({layout, src}) => {
    return `${src}?l=${layout}`
  }
  return (
    // <div className={styles.image}>
    <Image loader={myLoader} alt={alt} layout="fill" src={link} />
    // </div>
  )
}

export default StaticImage
