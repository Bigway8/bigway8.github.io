import IndexNavbar from 'components/Navbars/IndexNavbar'
import Navbar from 'components/Navbars/DocsNavbar'
import Footer from 'components/Footers/Footer'

const Support = () => {
  return (
    <div>
      <IndexNavbar />
      <div className="h-20"></div>
      <div className="container mt-8 mb-24 mx-auto flex py-8 w-full">
        <div className="w-3/12 mt-6">
          <Navbar />
        </div>

        <div className="w-9/12">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl mb-12 font-bold">Our Support Policy</h2>
            <hr className="mb-6" />
            <p className="text-lg mb-4 text-blueGray-600">
              Here at Creative Tim we strive to create great products and
              top-notch quality above everything. Our Support System follows the
              same belief.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">
              WE OFFER SUPPORT FOR:
            </h6>
            <ul className="text-md mb-2 text-blueGray-600">
              <li className="ml-2 leading-8">
                • Helping you use the features within our product
              </li>
              <li className="ml-2 leading-8">
                • Bug fixes – if you discovered bug in your downloaded product
                we will fix it
              </li>
              <li className="ml-2 leading-8">
                • Functionalities which do not work as advertised — we will fix
                them as soon as we find out from you that there might be
                something wrong
              </li>
            </ul>
            <h6 className="text-2xl mb-4 font-semibold">WE DO NOT:</h6>
            <ul className="text-md mb-2 text-blueGray-600">
              <li className="ml-2 leading-8">
                • Offer Support for third party plugins compatibility – We try
                our best to make our themes compatible with most of the popular
                plugins but it’s not always possible to make it compatible with
                every plugin or update out there.
              </li>
              <li className="ml-2 leading-8">
                • Customize your theme according to your design – For Custom
                development needs, please send a message.
              </li>
              <li className="ml-2 leading-8">
                • Fix hosting, server environment, or software issues.
              </li>
              <li className="ml-2 leading-8">
                • Take responsibility in case any issues arise from your changes
                to the theme outside the functionalities provided by us.
              </li>
            </ul>
            <h6 className="text-2xl mb-4 font-semibold">Subscribe</h6>
            <p className="text-md mb-2 text-blueGray-600">
              You can subscribe for support for your purchase from Bigway Studio
              at any time. Subscription conditions are negotiated individually
              when concluding a contract.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Support
