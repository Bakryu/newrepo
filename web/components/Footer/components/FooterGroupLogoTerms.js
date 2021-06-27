import Link from 'next/link'
import SLUGS from '../../../constants/slugs'
import styles from '../footer.module.scss'

const FooterGroupLogoTerms = ({logoData, terms}) => {
  const {privacyPolicy, termsOfUse, koydolInc, allRightReserved} = terms
  return (
    <div className={styles.logoTermsWrapper}>
      <Link href={SLUGS.HOME}>
        <a className={styles.logoWrapper}>
          {' '}
          <img src={logoData.logoImage} className={styles.logo} alt="logo" />
        </a>
      </Link>
      <div className={styles.termsWrapper}>
        <div className={styles.termsPolicyWrapper}>
          <Link href={SLUGS.PRIVACY_POLICY}>
            <a className={styles.privacyPolicy}>{privacyPolicy.name}</a>
          </Link>
          <Link href={SLUGS.TERMS_OF_USE}>
            <a className={styles.termsOfUse}>{termsOfUse.name}</a>
          </Link>
        </div>
        <span className={styles.koydolInc}>{koydolInc}</span>
        <span className={styles.allRightReserved}>{allRightReserved}</span>
      </div>
    </div>
  )
}
export default FooterGroupLogoTerms
