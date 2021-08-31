import IndexNavbar from 'components/Navbars/IndexNavbar'
import Navbar from 'components/Navbars/DocsNavbar'
import Footer from 'components/Footers/Footer'

const PrivacyPolicy = () => {
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
            <h2 className="text-4xl mb-12 font-bold">Our Privacy Policy</h2>
            <hr className="mb-6" />
            <h6 className="text-2xl mb-4 font-semibold">General rules</h6>
            <p className="text-md mb-2 text-blueGray-600">
              Bigway Studio does not share personal information of any kind with
              anyone. We will not sell or rent your name or personal information
              to any third party. We do not sell, rent or provide outside access
              to our mailing list or any data we store. Any data that a user
              stores via our facilities is wholly owned by that user or
              business. At any time a user or business is free to take their
              data and leave, or to simply delete their data from our
              facilities.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              Bigway Studio only collects such personal information that is
              necessary for you to access and use our services. This personal
              information includes, but is not limited to, first and last name,
              email address.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              Bigway Studio may release personal information if Bigway Studio is
              required to by law, search warrant, subpoena, court order or fraud
              investigation. We may also use personal information in a manner
              that does not identify you specifically nor allow you to be
              contacted but does identify certain criteria about our Site's
              users in general (such as we may inform third parties about the
              number of registered users, number of unique visitors, and the
              pages most frequently browsed).
            </p>
            <h6 className="text-2xl mb-4 font-semibold">
              Changes about privacy
            </h6>
            <p className="text-md mb-2 text-blueGray-600">
              If we change our terms of use we will post those changes on this
              page. Registered users will be sent an email that outlines changes
              made to the terms of use.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default PrivacyPolicy
