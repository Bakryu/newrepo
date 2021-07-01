import Link from 'next/link'
import useResize from 'use-resizing'
import MobileNavigation from './components/MobileNavigation'
import BigScreenNavigation from './components/BigScreenNavigation'
import NavigationAccordion from './components/NavigationAccordion'
import BlackNavigation from './components/BlackNavigation'

import styles from './header.module.scss'

const Header = ({navigationList, logo, contacts, blackNavigation}) => {
  const activeNavigation = () => {
    const screen = useResize()

    if (screen.width < 769) {
      return (
        <MobileNavigation logo={logo} navigationItems={navigationItems}>
          <BlackNavigation contacts={contacts} blackNavigation={blackNavigation} />
        </MobileNavigation>
      )
    }
    return (
      <BigScreenNavigation logo={logo} navigationItems={navigationItems}>
        <BlackNavigation contacts={contacts} blackNavigation={blackNavigation} />
      </BigScreenNavigation>
    )
  }
  const createNavigationList = (list) => {
    return (
      <ul className={styles.listWrapper}>
        {list.map((item, idx) => {
          if (item.hasOwnProperty('groupList')) {
            return <NavigationAccordion item={item} key={idx} />
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
  return <header>{activeNavigation()}</header>
}

export default Header
