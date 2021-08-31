import IndexNavbar from 'components/Navbars/IndexNavbar'
import Navbar from 'components/Navbars/DocsNavbar'
import Footer from 'components/Footers/Footer'

const Terms = () => {
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
            <h2 className="text-4xl mb-12 font-bold">Terms of Service</h2>
            <hr />
            <p className="text-blueGray-300 italic my-4">
              Please review our terms of use.
            </p>
            <hr className="mb-6" />
            <h6 className="text-2xl mb-4 font-semibold">General Terms</h6>
            <p className=" text-md mb-2 text-blueGray-600">
              By accessing and placing an order with Bigway Studio, you confirm
              that you are in agreement with and bound by the terms and
              conditions contained in the Terms Of Use outlined below. These
              terms apply to the entire website and any email or other type of
              communication between you and Bigway Studio.
            </p>
            <p className=" text-md mb-2 text-blueGray-600">
              Under no circumstances shall Bigway Studio team be liable for any
              direct, indirect, special, incidental or consequential damages,
              including, but not limited to, loss of data or profit, arising out
              of the use, or the inability to use, the materials on this site,
              even if Bigway Studio team or an authorized representative has
              been advised of the possibility of such damages. If your use of
              materials from this site results in the need for servicing, repair
              or correction of equipment or data, you assume any costs thereof.
            </p>
            <p className=" text-md mb-2 text-blueGray-600">
              Bigway Studio will not be responsible for any outcome that may
              occur during the course of usage of our resources.We reserve the
              rights to change prices and revise the resources usage policy in
              any moment.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Services</h6>
            <p className=" text-md mb-2 text-blueGray-600">
              All services are delivered by Bigway Studio, except in cases where
              the involvement of a third party is required.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Security</h6>
            <p className=" text-md mb-2 text-blueGray-600">
              Bigway Studio does not process any order payments through the
              website. All payments are made using the method specified in the
              contract in advance.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Cookie Policy</h6>
            <p className=" text-md mb-2 text-blueGray-600">
              A cookie is a file containing an identifier (a string of letters
              and numbers) that is sent by a web server to a web browser and is
              stored by the browser. The identifier is then sent back to the
              server each time the browser requests a page from the server. Our
              website uses cookies. By using our website and agreeing to this
              policy, you consent to our use of cookies in accordance with the
              terms of this policy. .
            </p>
            <p className=" text-md mb-2 text-blueGray-600">
              We use session cookies to personalise the website for each user.
              We use persistent cookies to keep tracks of referrals coming from
              our affiliate network.
            </p>
            <p className=" text-md mb-2 text-blueGray-600">
              We use Google Analytics to analyse the use of our website. Our
              analytics service provider generates statistical and other
              information about website use by means of cookies. Our analytics
              service provider's privacy policy is available at:
              http://www.google.com/policies/privacy/.
            </p>
            <p className=" text-md mb-2 text-blueGray-600">
              Deleting cookies will have a negative impact on the usability of
              the site. If you block cookies, you will not be able to use all
              the features on our website
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Refunds</h6>
            <p className=" text-md mb-2 text-blueGray-600">
              Refunds are made in a way specified in the contract in advance.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Ownership</h6>
            <p className=" text-md mb-2 text-blueGray-600">
              Ownership of the product is governed by the usage license selected
              by the seller.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Changes about terms</h6>
            <p className=" text-md mb-2 text-blueGray-600">
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

export default Terms
