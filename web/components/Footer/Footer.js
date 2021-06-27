import PropTypes from 'prop-types'
import FooterGroupRoute from './components/FooterGroupRoute'
import FooterGroupContacts from './components/FooterGroupContacts'
import FooterGroupLogoTerms from './components/FooterGroupLogoTerms'
import styles from './footer.module.scss'

const Footer = ({data}) => {
  const {logoData, firstColumn, secondColumn, contacts, terms} = data

  return (
    <footer className={styles.footer}>
      <FooterGroupLogoTerms logoData={logoData} terms={terms} />
      <div className={styles.descriptionWrapper}>
        <FooterGroupRoute list={firstColumn} />
        <FooterGroupRoute list={secondColumn} />
        <FooterGroupContacts contacts={contacts} />
      </div>
    </footer>
  )
}

Footer.propTypes = {
  // logo: PropTypes.string,
  firstColumn: PropTypes.array,
  secondColumn: PropTypes.array,
  contacts: PropTypes.object,
  terms: PropTypes.object
}

export default Footer
