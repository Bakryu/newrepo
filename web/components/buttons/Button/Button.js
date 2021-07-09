import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const Button = ({color, onClick, text}) => {
  return (
    <button className={classNames(styles[color], styles.buttonStyles)} onClick={onClick}>
      {text}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.string
}

export default Button
