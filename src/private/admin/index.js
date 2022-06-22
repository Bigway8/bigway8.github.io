import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/private/SideBar'
import styles from '../../assets/css/private/index.module.css'

export default function AdminPanel() {
  return (
    <div className={styles.page_wrapper}>
      {/*<Header />*/}
      <div className={styles.flex}>
        <SideBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

