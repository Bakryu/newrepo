import getUrl from '../../../helpers/getUrl'
import styles from './service.module.scss'

const ServicesHomePage = ({props}) => {
  const {title, description, servicesItemList} = props

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
                <img className={styles.itemImage} src={getUrl(item.image)} alt="service image" />
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
