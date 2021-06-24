import classNames from 'classnames/bind'
import DecorElement from '../../../DecorElement'

import styles from './formDecor.module.scss'
const FormDecor = () => {
  return (
    <>
      <div className={styles.leftGroup}>
        <DecorElement color="milk" />
      </div>
      <div className={styles.centralGroup}>
        <DecorElement />
        <DecorElement color="milk" />
      </div>
      <div className={styles.rightGroup}>
        <DecorElement color="black" />
        <DecorElement color="milk" />
        <DecorElement color="yellow" />
      </div>
    </>
  )
}

export default FormDecor
