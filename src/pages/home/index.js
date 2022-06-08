import React from 'react'
import logo from '../../assets/img/logo.svg'

const Home = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="mainlogo">
            <img className="mainlogo_animate" src={logo} alt="logo" />
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
