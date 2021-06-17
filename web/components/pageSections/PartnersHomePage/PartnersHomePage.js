import PropTypes from 'prop-types'
import getUrl from '../../../helpers/getUrl'
import {useSlider} from '../../../hooks'
import getPartnersQuantity from '../../../helpers/getPartnersQuantity'
import {TESTIMONIALS} from '../../../constants'

import MobileSlider from '../../sliders/MobileSlider'
import LinkTo from '../../LinkTo'
import styles from './partners.module.scss'

const PartnersHomePage = ({props}) => {
  const {title, subTitle, servicesImageListDesc, linkName} = props

  const {rows, slidesToShow, centerMode} = getPartnersQuantity()

  const serviceList = servicesImageListDesc.map((image, idx) => {
    return (
      <div className={styles.imageWrapper} key={idx}>
        <img src={getUrl(image)} className={styles.image} alt="partners logo" />
      </div>
    )
  })
  const slider = useSlider(
    <MobileSlider
      items={serviceList}
      settings={{
        rows: rows,
        slidesToShow: slidesToShow,
        centerMode: centerMode
      }}
    />
  )

  return (
    <section className={styles.partners}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.descriptionGrope}>
          <h2 className={styles.description}>{subTitle}</h2>
          <LinkTo link={TESTIMONIALS} linkName={linkName} />
        </div>
      </div>
      <div className={styles.listWrapper}>
        {slider || <div className={styles.imageList}>{serviceList}</div>}
      </div>
    </section>
  )
}

PartnersHomePage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  servicesImageListDesc: PropTypes.array
}

export default PartnersHomePage
