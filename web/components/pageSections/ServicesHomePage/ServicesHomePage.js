import getUrl from '../../../helpers/getUrl'
import styles from './service.module.scss'
import background1 from './images/background-1.png'
import background2 from './images/background-2.png'
import background3 from './images/background-3.png'
import background4 from './images/background-4.png'

const ServicesHomePage = ({props}) => {
  const {title, subTitle, servicesItemList} = props
  const backgroundArray = [background1, background2, background3, background4]

  let countImageDecor = -1

  return (
    <section className={styles.services}>
      <div className={styles.descriptionBox}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{subTitle}</h2>
      </div>
      <div className={styles.servicesList}>
        {servicesItemList.map((item, idx) => {
          if (countImageDecor < 4) {
            countImageDecor++
          } else {
            countImageDecor = -1
          }
          return (
            <div className={styles.servicesItem} key={idx}>
              <div className={styles.imageWrapper}>
                <img
                  className={styles.itemImage}
                  src={getUrl(item.image)}
                  alt="service item image"
                />
                <img
                  className={styles.itemBg}
                  src={backgroundArray[countImageDecor]}
                  alt="service item background"
                />
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
