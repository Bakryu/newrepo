import getUrl from '../../../../helpers/getUrl'
import Link from 'next/link'

import styles from './bigScreenNavigation.module.scss'

const BigScreenNavigation = ({logo, children}) => {
  const {link, slug, logoImage, alt} = logo
  return (
    <div className={styles.bigScreen}>
      <Link href={link || slug}>
        <div className={styles.logoWrapper}>
          <img src={getUrl(logoImage)} className={styles.logo} alt={alt} />
        </div>
      </Link>
      {children}
    </div>
  )
}

export default BigScreenNavigation
