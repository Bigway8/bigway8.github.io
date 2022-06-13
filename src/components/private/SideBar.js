import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  const location = '/private/admin'
  return (
    <div style={styles.sideBar}>
      <ul>
        <li style={styles.li}>
          <Link to={location}>Main</Link>
        </li>
        <li style={styles.li}>
          <Link to={location + '/admin-list'}>Admins</Link>
        </li>
      </ul>
    </div>
  )
}

const styles = {
  sideBar: {
    minWidth: 230,
    padding: '30px 0',
    backgroundColor: '#2196f3',
  },
  li: {
    padding: '0 20px',
    marginBottom: '16px',
  },
}
