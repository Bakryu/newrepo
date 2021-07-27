import PropTypes from 'prop-types'

import FilterItem from '../FilterItem'
import styles from './filterList.module.scss'

const FilterList = ({list, onClick}) => {
  return (
    <div className={styles.list}>
      <h1 className={styles.title}>{list[0].groupName}</h1>
      <FilterItem itemName="All" onClick={onClick} />
      {list?.map(({itemName}, idx) => {
        return <FilterItem itemName={itemName} key={idx} onClick={onClick} />
      })}
    </div>
  )
}

FilterList.propTypes = {
  list: PropTypes.array,
  onClick: PropTypes.func
}
export default FilterList
