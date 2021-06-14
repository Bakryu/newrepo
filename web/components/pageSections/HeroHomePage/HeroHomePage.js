import PropTypes from 'prop-types'
import stiles from './hero.module.css'

const HeroHomePage = ({props}) => {
  const {title, subTitle, proposition, propositionList} = props
  return (
    <section>
      <h1 className={stiles.title}>{title}</h1>
      <h2 className={stiles.description}>{subTitle}</h2>
      <h3 className={stiles.proposition}>{proposition}</h3>
      <ul className={stiles.propositionList}>
        {propositionList.map((item, idx) => {
          return (
            <li className={stiles.item}>
              <span className={stiles.itemNumber}>0{idx + 1}</span>
              {item}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

HeroHomePage.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  proposition: PropTypes.string,
  propositionList: PropTypes.array
}

export default HeroHomePage
