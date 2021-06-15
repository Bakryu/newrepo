import getUrl from '../../../helpers/getUrl'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './pathway.module.scss'
import arrowBlack from './image/arrow-black.svg'
import arrowYellow from './image/arrow-yellow.svg'

const PathWayHomePage = ({props}) => {
  const {pathwaysItemList, title, pathwaysImage} = props

  return (
    <section className={styles.pathWays}>
      <h1 className={styles.pathWaysTitle}>{title}</h1>
      <div className={styles.pathWaysList}>
        {pathwaysItemList.map((item, idx) => {
          return (
            <div className={styles.itemWrapper} key={idx}>
              <h2 className={styles.itemTitle} id={`pathWaysItemTitle${idx}`}>
                {item.title}{' '}
              </h2>
              <h3 className={styles.itemSubTitle}>{item.subTitle} </h3>
              <span className={styles.itemDescription}>{item.description}</span>
              <Link href={item.link}>
                <a className={styles.linkName}>
                  {item.linkName}
                  <div className={styles.arrowsWrapper}>
                    <img className={classNames(styles.arrowBlack, styles.arrow)} src={arrowBlack} />
                    <img
                      className={classNames(styles.arrowYellow, styles.arrow)}
                      src={arrowYellow}
                    />
                  </div>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={getUrl(pathwaysImage)} alt="section background" />
      </div>
    </section>
  )
}

export default PathWayHomePage
