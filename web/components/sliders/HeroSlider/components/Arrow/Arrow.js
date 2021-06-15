import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Arrow.module.scss'

const Arrow = ({onClick, children, direction, arrowImage}) => {
  const directionStyles = direction && direction === 'next' ? styles.next : styles.previous

  return (
    <button className={classNames(styles.container ,directionStyles)} onClick={onClick}>
      {children}
      <img className={styles.arrowImage} src={arrowImage} />
    </button>
  )
}

Arrow.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Arrow
