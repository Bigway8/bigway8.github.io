import React, { useState } from 'react'
import { Admin } from './users.ts'
/* 
todo че по валидации?
todo simple users
*/
export default function CreateUser() {
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault()
    const create = new Admin(user.name, user.email, user.role, user.password)

    create.createAdmin()
  }
  return (
    <form>
      <label>
        Имя
        <input
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Должность
        <input
          type="text"
          value={user.role}
          name="role"
          onChange={handleChange}
        />
      </label>
      <label>
        Пароль
        <input
          type="password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
      </label>
      <input onClick={handleClick} type="submit" value="Отправить" />
    </form>
  )
}

/* 
{
  "name": "string",
  "email": "string",
  "role": "string",
  "password": "string"
}


{
  "username": "string",
  "email": "string",
  "phone": "string",
  "age": 0,
  "sex": "string",
  "city": "string",
  "country": "string",
  "password": "string"
}

*/
