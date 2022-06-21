import axios from 'axios'
import { API_URL } from '../../../consts/a'

class User {
  name: string /* сказать валере чтобы изменил на username */
  email: string
  password: string
  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }
}
class Admin extends User {
  role: string | null
  constructor(
    name: string,
    email: string,
    role: string | null,
    password: string
  ) {
    super(name, email, password)
    this.role = role
  }
  createAdmin() {
    const data = {
      name: this.name,
      email: this.email,
      role: this.role,
      password: this.password,
    }
    axios.post(API_URL + '/admins', data)
  }
}

class SimpleUser extends User {
  username: string /* или тут на user */
  phone: string
  age: number
  sex: string /* мб лучше число */
  city: string
  country: string
  constructor(
    username: string,
    email: string,
    phone: string,
    age: number,
    sex: string,
    city: string,
    country: string,
    password: string
  ) {
    super(username, email, password)
    this.phone = phone
    this.age = age
    this.sex = sex
    this.city = city
    this.country = country
  }
  createSimpleUser() {
    console.log(
      this.username,
      this.email,
      this.phone,
      this.age,
      this.sex,
      this.city,
      this.country,
      this.password
    )
  }
}

export { Admin, SimpleUser }
