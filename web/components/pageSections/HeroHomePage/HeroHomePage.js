import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../../client'
import SendRequest from '../../buttons/SendRequest'
import styles from './hero.module.css'
import propositionDecor from './images/proposition-decor.png'

const HeroHomePage = ({props}) => {
  const {title, subTitle, proposition, propositionList, heroBg} = props

  const urlFor = (source) => {
    const builder = imageUrlBuilder(client)
    return builder.image(source)
  }

  return (
    <>
      <section className={styles.heroSection} style={{backgroundImage: `url(${urlFor(heroBg)})`}}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{subTitle}</h2>
        <SendRequest color={'yellow'} />
        <h3 className={styles.proposition}>
          <img src={propositionDecor} className={styles.propositionDecor} />
          {proposition}
        </h3>
      </section>
      <section className={styles.heroSectionProposition}>
        <div className={styles.propositionList}>
          {propositionList.map((item, idx) => {
            return (
              <div className={styles.item} key={idx}>
                <span className={styles.itemNumber}>0{idx + 1}</span>
                <span className={styles.itemDesc}>{item}</span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

HeroHomePage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  proposition: PropTypes.string,
  propositionList: PropTypes.array,
  heroBg: PropTypes.array
}

export default HeroHomePage
