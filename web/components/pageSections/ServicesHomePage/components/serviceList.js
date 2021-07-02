import getUrl from '../../../../helpers/getUrl'
import Image from '@/components/Image'
import classNames from 'classnames/bind'
import styles from '../service.module.scss'
import background1 from '../images/background-1.png'
import background2 from '../images/background-2.png'
import background3 from '../images/background-3.png'
import background4 from '../images/background-4.png'

const serviceList = (servicesItemList) => {
  const backgroundArray = [background1, background2, background3, background4]

  return servicesItemList.map((item, idx) => {
    const countImageDecor = (idx + 4) % 4

    return (
      <div
        className={classNames(styles.servicesItem, styles[`servicesItem-${countImageDecor}`])}
        key={idx}
      >
        <div className={styles.imageWrapper}>
          <img className={styles.itemImage} src={getUrl(item.image)} alt="service item image" />
          <div className={styles.itemBg}>
            <Image src={backgroundArray[countImageDecor]} alt="service item background" />
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <span className={styles.itemDescription}>{item.description}</span>
        </div>
      </div>
    )
  })
}

export default serviceList
