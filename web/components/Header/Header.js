import Link from 'next/link'
// import MobileNavigation from './components/MobileNavigation'
import BigScreenNavigation from './components/BigScreenNavigation'

import styles from './header.module.scss'

const Header = ({navigationList, logo}) => {
  const createNavigationList = (list) => {
    return (
      <ul className={styles.listWrapper}>
        {list.map((item, idx) => {
          if (item.hasOwnProperty('groupList')) {
            return (
              <li className={styles.listItem} key={idx}>
                {item.groupBoxName}
                <div className={styles.groupWrapper}>
                  {item.groupList.map((groupItem, idx) => {
                    return (
                      <Link href={groupItem.link || groupItem.slug}>
                        <a className={styles.groupItem} key={idx}>
                          {groupItem.name}
                        </a>
                      </Link>
                    )
                  })}
                </div>
                <Link href={item.link || item.slug}>
                  <a> {item.name}</a>
                </Link>
              </li>
            )
          }

          return (
            <li className={styles.listItem} key={idx}>
              <Link href={item.link || item.slug}>
                <a className={styles.name}> {item.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

  const navigationItems = createNavigationList(navigationList)
  return (
    <header>
      <BigScreenNavigation logo={logo}>{navigationItems}</BigScreenNavigation>
      {/* <MobileNavigation logo={logo}>{navigationItems}</MobileNavigation> */}
    </header>
  )
}

export default Header
