import Router from 'next/router'
import React from 'react'
import IndexNavbar from '../components/Navbars/IndexNavbar'

export default class About extends React.Component {
  componentDidMount = () => {
    Router.push('/')
  }

  render() {
    return <IndexNavbar />
  }
}
