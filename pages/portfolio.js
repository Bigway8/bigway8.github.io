import CardPortfolioProjects from 'components/Cards/CardPortfolioV2'
import CardPortfolioLogos from 'components/Cards/CardPortfolioV1'
import React from 'react'
import IndexNavbar from '../components/Navbars/IndexNavbar'
import Footer from 'components/Footers/Footer'

const axios = require('axios').default

export default function Portfolio() {
  const [items, setItems] = React.useState([])
  const [logos, setLogos] = React.useState([])
  React.useEffect(() => {
    axios
      .get('https://612d03cdab461c00178b601b.mockapi.io/api/v1/projects')
      .then((res) => setItems(res.data))
    axios
      .get('https://612d03cdab461c00178b601b.mockapi.io/api/v1/logos')
      .then((res) => setLogos(res.data))
  }, [])
  return (
    <>
      <IndexNavbar />
      <div className="container h-20 mb-6"></div>
      <div className="w-screen">
        <div className="">
          {' '}
          {/**className="grid grid-cols-fill-350 grid-rows-fill-350" */}
          {items.map((props) => {
            return <CardPortfolioProjects props={props} key={props.id} />
          })}
        </div>
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full relative h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          {items && (
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-current"
                style={{ color: 'rgba(71, 85, 105, 1)' }}
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          )}
        </div>
        <div
          className="grid grid-cols-fill-350 grid-rows-fill-350"
          style={{
            backgroundColor: 'rgba(71, 85, 105, 1)',
            paddingTop: '32px',
            gap: '1rem',
          }}
        >
          {logos.map((props) => {
            return <CardPortfolioLogos props={props} key={props.id} />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
