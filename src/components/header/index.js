import React, { useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logoSvg from '../../assets/img/logo.svg'

export default function Header() {
  const [logo, setLogo] = useState(false)
  const burger = () => {
    document.querySelector('.header_burger').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
  }
  let location = useLocation()
  useMemo(() => {
    location.pathname !== '/' ? setLogo(true) : setLogo(false)
  }, [location])
  return (
    <header className="header">
      <div className="container">
        <div className="header_burger" onClick={burger}>
          <span></span>
        </div>
        <nav
          className="header_menu"
          style={logo ? { justifyContent: 'space-between' } : {}}
        >
          {logo && (
            <Link to="/" className="header_logo">
              <img src={logoSvg} height={50} alt="logo" />
            </Link>
          )}
          <ul className="header_list">
            <li className="header_home-link">
              <Link to="/" className="header_link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="header_link">
                About
              </Link>
            </li>
            <li>
              <Link to="/terms" className="header_link">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/policy" className="header_link">
                Policy
              </Link>
            </li>
            <li>
              <Link to="/investments" className="header_link">
                For investors
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
