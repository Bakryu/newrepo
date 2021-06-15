import PropTypes from 'prop-types'
import useResize from 'use-resizing'
import getUrl from '../../../helpers/getUrl'
import Button from '../../buttons/Button'
import styles from './hero.module.scss'
import propositionDecor from './images/proposition-decor.png'
import HeroSlider from '../../sliders/HeroSlider'

const paddingLeftToSlider = 561
const widthSliderItem = 288

const HeroHomePage = ({props}) => {
  const screenSize = useResize()
  const {title, subTitle, proposition, propositionList, heroBg} = props
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    // this is an operation for dynamically calculating the number of displayed slider items
    slidesToShow: (screenSize.width - paddingLeftToSlider) / widthSliderItem,
    slidesToScroll: 1
  }

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
          {proposition}
        </h3>
      </section>
      <section className={styles.heroSectionProposition}>
        <HeroSlider settings={settings}>
          {propositionList.map((item, idx) => {
            return (
              <div key={idx}>
                <div className={styles.item}>
                  <span className={styles.itemNumber}>0{idx + 1}</span>
                  <span className={styles.itemDesc}>{item}</span>
                </div>
              </div>
            )
          })}
        </HeroSlider>
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
