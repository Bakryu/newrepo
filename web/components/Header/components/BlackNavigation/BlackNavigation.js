import Link from 'next/link'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './blackNavigation.module.scss'
import arrow from '../../image/arrow-left.svg'

const BlackNavigation = ({blackNavigation, contacts}) => {
  const {backLink, backName} = blackNavigation
  const {email, phoneNumber} = contacts
  return (
    <div className={styles.blackNavigation}>
      <Link href={backLink}>
        <a className={styles.link}>
          <img src={arrow} className={styles.arrow} alt="decor arrow" />
          {backName}
        </a>
      </Link>

      <div className={styles.contactWrapper}>
        <a
          href={`tel:${phoneNumber.number}`}
          className={classNames(styles.phoneNumber, styles.linkText)}
        >
          {phoneNumber.numberText}
          <span className={styles.contact}>{phoneNumber.placeholder}</span>
        </a>
        <a href={`mailto:${email.email}`} className={classNames(styles.email, styles.linkText)}>
          {email.text}
          <span className={styles.contact}>{email.email}</span>
        </a>
      </div>
    </div>
  )
}

BlackNavigation.propTypes = {
  blackNavigation: PropTypes.object,
  contacts: PropTypes.object
}

export default BlackNavigation
