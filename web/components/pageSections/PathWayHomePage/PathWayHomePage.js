import imageUrlBuilder from '@sanity/image-url'
import client from '../../../client'
import Link from 'next/link'
import styles from './pathway.module.css'

const PathWayHomePage = ({props}) => {
  const {pathwaysItemList, title, pathwaysImage} = props
  const urlFor = (source) => {
    const builder = imageUrlBuilder(client)
    return builder.image(source)
  }
  return (
    <section className={styles.pathWays}>
      <h1 className={styles.pathWaysTitle}>{title}</h1>
      <div className={styles.pathWaysList}>
        {pathwaysItemList.map((item, idx) => {
          return (
            <div className={styles.itemWrapper} key={idx}>
              <h2 className={styles.itemTitle} id={`pathWaysItemTitle${idx}`}>
                {item.title}{' '}
              </h2>
              <h3 className={styles.itemSubTitle}>{item.subTitle} </h3>
              <span className={styles.itemDescription}>{item.description}</span>
              <Link href={item.link} className={styles.link}>
                <a className={styles.linkName}>{item.linkName}</a>
              </Link>
            </div>
          )
        })}
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={urlFor(pathwaysImage)} alt="section background" />
      </div>
    </section>
  )
}

export default PathWayHomePage
