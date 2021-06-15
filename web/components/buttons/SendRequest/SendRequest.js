import PropTypes from 'prop-types'
import styles from './sendRequest.module.css'

const SendRequest = ({color}) => {
  return <button className={`${styles[color]} ${styles.buttonStyles}`}>send request</button>
}

SendRequest.propTypes = {
  color: PropTypes.string
}

export default SendRequest
