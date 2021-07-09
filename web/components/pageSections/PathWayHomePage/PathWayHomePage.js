import getUrl from '../../../helpers/getUrl'
import classNames from 'classnames/bind'
import LinkTo from '../../LinkTo'
import DecorElement from '../../DecorElement'
import COLORS from '../../../constants/colors'
import styles from './pathway.module.scss'

const PathWayHomePage = ({props}) => {
  const {pathwaysItemList, title, pathwaysImage} = props

  return (
    <section className={styles.pathWays}>
      <h1 className={styles.pathWaysTitle}>{title}</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.pathWaysList}>
          {pathwaysItemList.map((item, idx) => {
            return (
              <div className={styles.itemWrapper} key={idx}>
                <h2 className={styles.itemTitle} id={`pathWaysItemTitle${idx}`}>
                  {item.title}{' '}
                </h2>
                <h3 className={styles.itemSubTitle}>{item.subTitle} </h3>
                <span className={styles.itemDescription}>{item.description}</span>
                <LinkTo link={item.link} linkName={item.linkName} />
              </div>
            )
          })}
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrontWrapper}>
            <img className={styles.image} src={getUrl(pathwaysImage)} alt="section background" />
          </div>
          <div className={styles.decorWrapper}>
            <img className={styles.image} src={getUrl(pathwaysImage)} alt="section background" />
          </div>
          <div className={classNames(styles.decorBoxWrapper, styles.decorRight)}>
            <DecorElement color={COLORS.WHITE} />
            <DecorElement color={COLORS.MILK} />
            <DecorElement color={COLORS.SPIRIT} />
          </div>
          <div className={classNames(styles.decorBoxWrapper, styles.decorLeft)}>
            <DecorElement color={COLORS.WHITE} />
            <DecorElement color={COLORS.MILK} />
            <DecorElement color={COLORS.SPIRIT} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PathWayHomePage
