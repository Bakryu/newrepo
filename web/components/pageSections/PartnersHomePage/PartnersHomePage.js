import PropTypes from 'prop-types'
import getUrl from '../../../helpers/getUrl'
import styles from './partners.module.scss'

const PartnersHomePage = ({props}) => {
  const {title, subTitle, servicesImageListDesc} = props
  return (
    <section className={styles.partners}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.descriptionGrope}>
          <h2 className={styles.description}>{subTitle}</h2>
          <a>visit testimonials page</a>
        </div>
      </div>
      <div className={styles.imageList}>
        {servicesImageListDesc.map((image, idx) => {
          return (
            <div className={styles.imageWrapper} key={idx}>
              <img src={getUrl(image)} className={styles.image} />
            </div>
          )
        })}
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
