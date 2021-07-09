import PropTypes from 'prop-types'
import Link from 'next/link'
import Input from '../../../Input'
import Button from '../../../buttons/Button'
import styles from './form.module.scss'

const Form = ({inputList, buttonText, agreements, privacyPolicy, termsOfUse}) => {
  const {email, name, phoneNumber, zipCode} = inputList //placeholders
  return (
    <form className={styles.form}>
      <Input name="name" placeholder={name} validations={{isEmpty: true}} />
      <Input name="email" placeholder={email} validations={{isEmpty: true}} />
      <Input name="phoneNumber" placeholder={phoneNumber} validations={{isEmpty: true}} />
      <Input name="zipCode" placeholder={zipCode} validations={{isEmpty: true}} />
      <Button color="black" onclick={() => {}} text={buttonText} />
      <span className={styles.agreements}>
        {agreements}
        <Link href={privacyPolicy.link || privacyPolicy.slug}>
          <a className={styles.agreementsLink}>{privacyPolicy.name}</a>
        </Link>{' '}
        and{' '}
        <Link href={termsOfUse.link || termsOfUse.slug}>
          <a className={styles.agreementsLink}>{termsOfUse.name}</a>
        </Link>{' '}
      </span>
    </form>
  )
}

Form.propTypes = {
  inputList: PropTypes.object,
  agreements: PropTypes.string,
  buttonText: PropTypes.string,
  privacyPolicy: PropTypes.object,
  termsOfUse: PropTypes.object
}

export default Form