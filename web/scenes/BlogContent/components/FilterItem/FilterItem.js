import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './filterItem.module.scss'

const FilterItem = ({itemName, isActive, onClick}) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={classNames(styles.radioButton, isActive && styles.active)}></div>
      <span className={styles.category}>{itemName}</span>
    </div>
  )
}

FilterItem.propTypes = {
  item: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool
}
export default FilterItem
