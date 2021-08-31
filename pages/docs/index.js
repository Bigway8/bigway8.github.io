import React from 'react'
import { useRouter } from 'next/router'

import IndexNavbar from 'components/Navbars/IndexNavbar'
import Navbar from 'components/Navbars/DocsNavbar'
import Footer from 'components/Footers/Footer'

/* export default class Documents extends Component {
  componentDidMount = () => {
    Router.push('/docs/terms')
  }
  render() {
    return <div />
  }
} */

export default function Documents() {
  const router = useRouter()
  console.log(router)
  return (
    <div className="h-screen">
      <IndexNavbar />
      <div className="h-20"></div>
      <div className="container mt-8 mb-24 mx-auto flex py-8 w-full h-3/6">
        <div className="w-3/12 mt-6">
          <Navbar />
        </div>

        <div className="w-9/12 self-center">
          <p className="text-2xl text-semibold">
            Here you will receive complete documentation on the information you
            are interested in.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
