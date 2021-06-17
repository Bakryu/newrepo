import PropTypes from 'prop-types'
import {useSlider} from '../../../hooks'
import getUrl from '../../../helpers/getUrl'
import Button from '../../buttons/Button'
import styles from './hero.module.scss'
import HeroSlider from '../../sliders/HeroSlider'
import MobileSlider from '../../sliders/MobileSlider'
import propositionDecor from './images/proposition-decor.png'
import propositionDecorBlack from './images/proposition-decor-black.png'

const HeroHomePage = ({props}) => {
  const {title, subTitle, proposition, propositionList, heroBg} = props

  const sliderItems = propositionList.map((item, idx) => {
    return (
      <div key={idx}>
        <div className={styles.item}>
          <span className={styles.itemNumber}>0{idx + 1}</span>
          <span className={styles.itemDesc}>{item}</span>
        </div>
      </div>
    )
  })

  const viewSlider = useSlider(
    <MobileSlider items={sliderItems} buttonsStyle="heroSlider" />,
    <HeroSlider items={sliderItems} />
  )

  return (
    <>
      <section className={styles.heroSection} style={{backgroundImage: `url(${getUrl(heroBg)})`}}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.description}>{subTitle}</h2>
        <Button color={'yellow'} text={'send request'} onClick={() => {}} />
        <h3 className={styles.proposition}>
          <img
            src={propositionDecor}
            className={styles.propositionDecor}
            alt="decorative element"
          />
          <img
            src={propositionDecorBlack}
            className={styles.propositionDecorBlack}
            alt="decorative element"
          />
          {proposition}
        </h3>
      </section>
      <section className={styles.heroSectionProposition}>{viewSlider}</section>
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
