import Link from 'next/link'
import PropTypes from 'prop-types'
import getUrl from '../../../../helpers/getUrl'

import styles from './bigScreenNavigation.module.scss'

const BigScreenNavigation = ({logo, navigationItems, children}) => {
  const {slug, logoImageMain, alt} = logo
  return (
    <>
      {children}
      <div className={styles.bigScreen}>
        <Link href={slug}>
          <a className={styles.logoWrapper}>
            <img src={getUrl(logoImageMain)} className={styles.logo} alt={alt} />
          </a>
        </Link>
        {navigationItems}
      </div>
    </>
  )
}

BigScreenNavigation.propTypes = {
  navigationItems: PropTypes.object,
  logo: PropTypes.object
}

export default BigScreenNavigation
