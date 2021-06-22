import Link from 'next/link'
import styles from '../footer.module.scss'

const FooterGroupRoute = ({list}) => {
  return (
    <div className={styles.descriptionGroupItem}>
      {list.map((item, idx) => {
        return (
          <Link href={item.link} key={idx}>
            <span className={styles.linkText}>{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
export default FooterGroupRoute
