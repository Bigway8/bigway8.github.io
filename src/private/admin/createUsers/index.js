/**
 *  Временный
 */

import { useState } from 'react'
import CreateUser from './CreateUser'
import styles from '../../../assets/css/private/index.module.css'

export default function CreateUsers() {
  const [userState, setUserState] = useState(false)
  const [adminState, setAdminState] = useState(false)

  const customerHandle = () => {
    setUserState(!userState)
    setAdminState(false)
  }
  const adminHandle = () => {
    setAdminState(!adminState)
    setUserState(false)
  }

  return (
    <>
      <div>
        <button className={styles.action_button}
                onClick={customerHandle}>Создать пользователя</button>
        <button className={styles.action_button}
                onClick={adminHandle}>Создать администратора</button>
        {userState && <div>customer</div>}
        {adminState && (
          <div className={styles.create}>
            <CreateUser />
          </div>
        )}
      </div>
    </>
  )
}
