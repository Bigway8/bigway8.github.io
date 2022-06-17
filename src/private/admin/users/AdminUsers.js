import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../consts/a'

import styles from '../../../assets/css/private/index.module.css'

export default function AdminUsers() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(API_URL + 'users').then((res) => setData(res.data))
  }, [])

  return (
    <>
      <div className={styles.users_table}>
        {data.map((user, i) => {
          return (
            <div key={user.id} className={styles.user_card}>
              <div className={styles.card__shadows}>
                <div className={styles.card__field}>
                  <div className={styles.short_info}>
                    <div className={styles.short_info__img}>
                      <img
                        src="/"
                        alt={user.username}
                        className={styles.short_info__img_}
                      />
                    </div>
                    <div className={styles.short_info__text}>
                      <h5 className={styles.short_info__h5}>{user.username}</h5>
                      <p className={styles.short_info__p}>{'role'}</p>
                    </div>
                  </div>
                  <div className={styles.action_buttons}>
                    <button
                      className={styles.action_button}
                      style={{ marginRight: '4px' }}
                    >
                      Чат
                    </button>
                    <button className={styles.action_button}>Профиль</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
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
