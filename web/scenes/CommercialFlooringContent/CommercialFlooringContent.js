import PropTypes from 'prop-types'

import List from './components/List'
import styles from './commercialFlooringContent.module.scss'

const CommercialFlooringContent = ({commercialFlooringContent}) => {
  const {title, description, list} = commercialFlooringContent
  return (
    <section className={styles.commercialFlooring}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.description}>{description}</span>
      <List list={list} />

      {/* <DecorElement /> */}
    </section>
  )
}

CommercialFlooringContent.propTypes = {
  commercialFlooringContent: PropTypes.object
}
export default CommercialFlooringContent
