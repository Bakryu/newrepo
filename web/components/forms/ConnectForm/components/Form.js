import PropTypes from 'prop-types'
import Link from 'next/link'
import Input from '../../../Input'
import Button from '../../../buttons/Button'
import {PRIVACY_POLICY, TERMS_OF_USE} from '../../../../constants/links'
import styles from './form.module.scss'

const Form = ({inputList, buttonText, agreements, privacyPolicy, and, termsOfUse}) => {
  const {email, name, phoneNumber, zipCode} = inputList //placeholders
  return (
    <form className={styles.form}>
      <Input name="name" placeholder={name} validations={{isEmpty: true}} />
      <Input name="email" placeholder={email} validations={{isEmpty: true}} />
      <Input name="phoneNumber" placeholder={phoneNumber} validations={{isEmpty: true}} />
      <Input name="phoneNumber" placeholder={zipCode} validations={{isEmpty: true}} />
      <Button color="black" onclick={() => {}} text={buttonText} />
      <span className={styles.agreements}>
        {agreements}
        <Link href={PRIVACY_POLICY}>
          <a className={styles.agreementsLink}>{privacyPolicy}</a>
        </Link>{' '}
        {and}
        <Link href={TERMS_OF_USE}>
          <a className={styles.agreementsLink}>{termsOfUse}</a>
        </Link>{' '}
      </span>
    </form>
  )
}

Form.propTypes = {
  inputList: PropTypes.object,
  agreements: PropTypes.string,
  privacyPolicy: PropTypes.string,
  and: PropTypes.string,
  termsOfUse: PropTypes.string
}

export default Form
