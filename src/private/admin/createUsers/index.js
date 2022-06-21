/**
 *  Временный
 */

import { useState } from 'react'
import CreateUsers from './CreateUsers'

export default function CreateUser() {
  const [userState, setUserState] = useState(false)
  const [adminState, setAdminState] = useState(false)

  const userHandle = () => {
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
        <button onClick={userHandle}>create user</button>
        <button onClick={adminHandle}>create admin</button>
        {userState && <div>user</div>}
        {adminState && (
          <div>
            <CreateUsers />
          </div>
        )}
      </div>
    </>
  )
}
