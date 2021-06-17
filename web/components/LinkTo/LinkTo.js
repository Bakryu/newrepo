import Link from 'next/link'
import classNames from 'classnames/bind'
import arrowBlack from './image/arrow-black.svg'
import arrowYellow from './image/arrow-yellow.svg'
import styles from './linkTo.module.scss'
const LinkTo = ({link, linkName}) => {
  return (
    <Link href={link}>
      <a className={styles.linkName}>
        {linkName}
        <div className={styles.arrowsWrapper}>
          <img className={classNames(styles.arrowBlack, styles.arrow)} src={arrowBlack} />
          <img className={classNames(styles.arrowYellow, styles.arrow)} src={arrowYellow} />
        </div>
      </a>
    </Link>
  )
}

export default LinkTo
