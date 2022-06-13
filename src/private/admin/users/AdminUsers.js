import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../consts/a'

export default function AdminUsers() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(API_URL + 'users').then((res) => setData(res.data))
  }, [])
  const handleAllCheckboxes = (e) => {
    /* console.log(e) */
  }
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={{ ...styles.th, ...styles.thd }}>
            <input type="checkbox" onClick={(e) => handleAllCheckboxes(e)} />
          </th>
          <th style={{ ...styles.th, ...styles.thd }}>Дата регистрации</th>
          <th style={{ ...styles.th, ...styles.thd }}>Имя</th>
          <th style={{ ...styles.th, ...styles.thd }}>Почта</th>
          <th style={{ ...styles.th, ...styles.thd }}>Город</th>
          <th style={{ ...styles.th, ...styles.thd }}>Подробно</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => {
          return (
            <tr key={user.id}>
              <td style={{ ...styles.td, ...styles.thd }}>
                <input type="checkbox" id={'checkbox' + user.id} />
              </td>
              <td style={{ ...styles.td, ...styles.thd }}>{'user.regData'}</td>
              <td style={{ ...styles.td, ...styles.thd }}>{user.username}</td>
              <td style={{ ...styles.td, ...styles.thd }}>{user.email}</td>
              <td style={{ ...styles.td, ...styles.thd }}>{user.city}</td>
              <td style={{ ...styles.td, ...styles.thd }}>{'icon info'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
const styles = {
  table: {
    width: '100%',
    textDecoration: 'none',
    borderCollapse: 'collapse',
    textAlign: 'center',
  },
  th: {
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#ffffff',
    backgroundColor: '#354251',
  },
  td: {
    fontSize: '13px',
    color: '#666666',
  },
  thd: {
    whiteSpace: 'pre-wrap',
    padding: '4px 6px',
    verticalAlign: 'middle',
    border: '1px solid #354251',
  },
}
/* 
{
about: null
age: 31
city: "Saint-Petersburg"
country: "Russia"
email: null
galleryUrl: null
id: "629e6eddc22cf415c0bace0d"
mainPhotoUrl: null
phone: null
sex: "MALE"
username: "amberize"
} 
*/
