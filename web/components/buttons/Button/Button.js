import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const Button = ({color, onClick, text, link, type}) => {
  return (
    <button
      className={classNames(styles[color], styles.buttonStyles)}
      onClick={onClick}
      type={type && type}
    >
      {text}
      {link && <a className={styles.link} href={link} />}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string
}

export default Button
