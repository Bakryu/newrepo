import PropTypes from 'prop-types'
import Link from 'next/link'
import classNames from 'classnames/bind'
import {useState} from 'react'
import getUrl from '../../../../helpers/getUrl'

import styles from './mobileNavigation.module.scss'

const MobileNavigation = ({logo, navigationItems, children}) => {
  const [isOpen, setOpen] = useState(false)

  const {link, slug, logoImage, alt} = logo
  return (
    <div className={styles.mobileNavigation}>
      <Link href={link || slug}>
        <a className={styles.logoWrapper}>
          <img src={getUrl(logoImage)} className={styles.logo} alt={alt} />
        </a>
      </Link>
      <div className={styles.burgerContainer}>
        <div
          className={classNames(styles.burger, isOpen && styles.active)}
          onClick={() => setOpen(!isOpen)}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={classNames(styles.listWrapper, isOpen && styles.listWrapperActive)}>
        {children}
        {navigationItems}
      </div>
    </div>
  )
}

MobileNavigation.propTypes = {
  logo: PropTypes.object,
  navigationItems: PropTypes.object,
  item: PropTypes.object
}
export default MobileNavigation
