import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/private/SideBar'

export default function AdminPanel() {
  return (
    <div style={{ ...styles.flex, ...styles.adminPanel }}>
      <SideBar />
      <div style={styles.content}>
        {/* header */}
        <Outlet />
      </div>
    </div>
  )
}

const styles = {
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  adminPanel: {
    height: '100vh',
  },
  content: {
    width: '100%',
    padding: '30px 40px',
    backgroundColor: '#fafafa',
  },
}
