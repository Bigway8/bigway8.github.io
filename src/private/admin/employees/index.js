import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../consts/a'

import styles from '../../../assets/css/private/index.module.css'

export default function Employees() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(API_URL + 'admins').then((res) => setData(res.data))
  }, [])

  return (
    <>
      <div className={styles.users_table}>
        {data.map((admin, i) => {
          return (
            <div key={admin.id} className={styles.user_card}>
              <div className={styles.card__shadows}>
                <div className={styles.card__field}>
                  <div className={styles.short_info}>
                    <div className={styles.short_info__img}>
                      <img
                        src="/"
                        alt={admin.name}
                        className={styles.short_info__img_}
                      />
                    </div>
                    <div className={styles.short_info__text}>
                      <h5 className={styles.short_info__h5}>{admin.name}</h5>
                      <p className={styles.short_info__p}>{admin.role}</p>
                    </div>
                  </div>
                  <div className={styles.action_buttons}>
                    <button className={styles.action_button}>Чат</button>
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
