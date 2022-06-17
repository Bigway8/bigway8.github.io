import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../../src/assets/css/private/index.module.css'
import logo from '../../../src/assets/img/favicon__128x128.ico'

export default function SideBar() {
  const location = '/private/admin'
  return (
    <div className={styles.sidebar_wrapper}>
      <Link to={location} className={styles.sidebar_logolink}>
        <img src={logo} width="50" height="50" />
        <p>MetYou Admin</p>
      </Link>
      <div className={styles.sidebar}>
        <ul>
          <li style={styles.li}>
            <Link className={styles.sidebar_link} to={location}>Главная</Link>
          </li>
          <li style={styles.li}>
            <Link className={styles.sidebar_link} to={location + '/admin-list'}>Администраторы</Link>
          </li>
          <li style={styles.li}>
            <Link className={styles.sidebar_link} to={location + '/customers'}>Пользователи</Link>
          </li>
          <li style={styles.li}>
            <Link className={styles.sidebar_link} to={location + '/partners'}>Партенры</Link>
          </li>
          <li style={styles.li}>
            <Link className={styles.sidebar_link} to={location + '/purchases'}>Покупки</Link>
          </li>
          <li style={styles.li}>
            <Link className={styles.sidebar_link} to={location + '/subscriptions'}>Подписки</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

