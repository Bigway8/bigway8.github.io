import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../../../src/assets/css/private/index.module.css'
import logo from '../../../src/assets/img/favicon__128x128.ico'

export default function SideBar() {
  const location = '/private/admin'
  return (
    <div className={styles.sidebar_wrapper}>
      <Link to={location} className={styles.sidebar_logolink}>
        <img src={logo} alt="logo" width="50" height="50" />
        <p>MetYou Admin</p>
      </Link>
      <div className={styles.sidebar}>
        <ul>
          {pages.map((page, i) => {
            return (
              <li style={styles.li} key={page.to + i}>
                <Link className={styles.sidebar_link} to={location + page.to}>
                  {page.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const pages = [
  {
    to: '/',
    title: 'Отчеты',
  },
  {
    to: '/employees',
    title: 'Сотрудники',
  },
  {
    to: '/users',
    title: 'Пользователи',
  },
  {
    to: '/create-user',
    title: 'Создать пользователя',
  },
]
