import React from 'react'
import Link from 'next/link'
// components

// import PagesDropdown from 'components/Dropdowns/PagesDropdown.js'

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/"
              >
                <img src="/img/brand/logo-white.png" alt="logo" />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                  rel="noreferrer"
                >
                  <i
                    className="lg:text-blueGray-200 text-blueGray-400 fas fa-info-circle text-lg leading-lg"
                    title="About"
                  />
                  <span className="lg:hidden inline-block ml-2">About</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/portfolio"
                  rel="noreferrer"
                >
                  <i
                    className="lg:text-blueGray-200 text-blueGray-400 far fa-images text-lg leading-lg"
                    title="Portfolio"
                  />
                  <span className="lg:hidden inline-block ml-2">Portfolio</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/services"
                  rel="noreferrer"
                >
                  <i
                    className="lg:text-blueGray-200 text-blueGray-400 fas fa-briefcase text-lg leading-lg"
                    title="Services"
                  />
                  <span className="lg:hidden inline-block ml-2">Services</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="mailto:lzxneonxzl@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="far fa-envelope-open"></i> {'  '} Contact Us
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
