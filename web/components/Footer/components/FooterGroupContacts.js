import classNames from 'classnames/bind'
import getUrl from '../../../helpers/getUrl'
import styles from '../footer.module.scss'

const FooterGroupContacts = ({contacts}) => {
  const {address, phoneNumber, email, socials} = contacts
  return (
    <div className={styles.descriptionGroupItem}>
      <span className={classNames(styles.address, styles.linkText)}>{address}</span>
      <a
        href={`tel:${phoneNumber.number}`}
        className={classNames(styles.phoneNumber, styles.linkText)}
      >
        {' '}
        {phoneNumber.placeholder}
      </a>
      <a href={`mailto:${email.email}`} className={classNames(styles.email, styles.linkText)}>
        {email.email}
      </a>
      <div className={styles.socialsWrapper}>
        {socials.map((item, idx) => {
          return (
            <a
              href={item.link}
              className={styles.socialsItem}
              key={idx}
              alt="social network"
              target="_blank"
              rel="noreferrer"
            >
              <img src={getUrl(item.image)} className={styles.socialImage} />
            </a>
          )
        })}
      </div>
    </div>
  )
}
export default FooterGroupContacts
