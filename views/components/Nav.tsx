import React from 'react'
import Link from 'next/link'
import styles from './nav.module.scss'

const Nav = () => (
  <div className={styles.navWrapper}>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Homez</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Nav
