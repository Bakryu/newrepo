import imageUrlBuilder from '@sanity/image-url'
import client from '../../../client'

import styles from './service.module.css'

const ServicesHomePage = ({props}) => {
  const {title, description, servicesItemList} = props

  const urlFor = (source) => {
    const builder = imageUrlBuilder(client)
    return builder.image(source)
  }

  return (
    <section className={styles.services}>
      <div className={styles.descriptionBox}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{description}</h2>
      </div>
      <div>
        {servicesItemList.map((item, idx) => {
          return (
            <div className={styles.servicesItem} key={idx}>
              <div className={styles.imageWrapper}>
                <img className={styles.itemImage} src={urlFor(item.image)} />
              </div>
              <div className={styles.descriptionWrapper}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <span className={styles.itemDescription}>{item.description}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesHomePage
