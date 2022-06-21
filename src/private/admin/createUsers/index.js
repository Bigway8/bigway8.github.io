/**
 *  Временный
 */

import { useState } from 'react'
import CreateUser from './CreateUser'

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
        <button onClick={customerHandle}>create customer</button>
        <button onClick={adminHandle}>create admin</button>
        {userState && <div>customer</div>}
        {adminState && (
          <div>
            <CreateUser />
          </div>
        )}
      </div>
    </>
  )
}
