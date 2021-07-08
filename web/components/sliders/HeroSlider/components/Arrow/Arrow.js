import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './arrow.module.scss'

const Arrow = ({onClick, children, direction, arrowImage}) => {
  const directionStyles = direction && direction === 'next' ? styles.next : styles.previous

  return (
    <button className={classNames(styles.container, directionStyles)} onClick={onClick}>
      {children}
      <Image className={styles.arrowImage} src={arrowImage} alt="arrow" />
    </button>
  )
}

Arrow.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Arrow
