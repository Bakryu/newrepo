import Link from 'next/link'
import styles from './pathway.module.css'

const PathWayHomePage = ({title, pathWaysList, image}) => {
  return (
    <section>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.pathWaysList}>
        {pathWaysList.map((item) => {
          return (
            <div className={styles.title}>
              <h2 className={styles.itemTitle}>{item.title} </h2>
              <h3 className={styles.itemSubTitle}>{item.subTitle} </h3>
              <span className={styles.itemDescription}>{item.description}</span>
              <Link href={item.link} className={styles.link}>
                <a>{item.linkName}</a>
              </Link>
            </div>
          )
        })}
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="section background" />
      </div>
    </section>
  )
}

export default PathWayHomePage
