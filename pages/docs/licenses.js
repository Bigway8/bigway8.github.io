import IndexNavbar from 'components/Navbars/IndexNavbar'
import Navbar from 'components/Navbars/DocsNavbar'
import Footer from 'components/Footers/Footer'

const Licenses = () => {
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
            <h2 className="text-4xl mb-12 font-bold">
              End User License Agreement
            </h2>
            <hr className="mb-6" />
            <h6 className="text-2xl mb-4 font-semibold">
              Simple Human Explanation
            </h6>
            <p className="text-md mb-2 text-blueGray-600">
              You can use any of our Sevices and Products to create any kind of
              Project, Website, Web App, Mobile App for both Personal and
              Commercial usage. The code and design files of the products can be
              accessed by 1 or multiple persons from your team.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              There are some things you <b>can't do</b>:
              <br />
              <span className="pl-4">
                • You can’t redistribute or resell our products source files as
                they are.
              </span>
            </p>
            <h6 className="text-2xl mb-4 font-semibold">General</h6>
            <p className="text-md mb-2 text-blueGray-600">
              By using any Digital Product (Item) from Bigway Studio (MET YOU,
              LLC), you agree that this End User User License Agreement (EULA)
              is a legally binding and valid contract and agree to be bound by
              it. You agree to abide by the intellectual property laws and all
              of the terms and conditions of this Agreement.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              If you do not agree to be bound by this agreement, remove any Item
              from your computer now and, if applicable, promptly return to MET
              YOU, LLC by mail any copies of the Item and related documentation
              and packaging in your possession.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">License Period</h6>
            <p className="text-md mb-2 text-blueGray-600">
              A License is for the life time. That means, once you buy it, you
              can use the Item forever within the restrictions described in this
              document. The rest of the conditions are negotiated when
              concluding an agreement between the Client and MET YOU, LLC.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">License Definitions</h6>
            <p className="text-md mb-2 text-blueGray-600">
              <b>Item</b> is the product created by Bigway Studio that comes
              with HTML, CSS, JS, and other source code files available to the
              Person after purchasing any of our licenses.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              <b>Person</b> is the individual who has purchased a any of our
              Licenses.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              <b>End Product</b> is any artifact (website, web app, mobile app,
              dApp) produced that incorporates the Item or derivatives of the
              Item.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              <b>End User</b> is a user of an End Product.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              <b>Client</b> is an individual or company that receive custom
              services directly from the Person, produced specifically for that
              individual or company.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">
              About the Source Code
            </h6>
            <p className="text-md mb-2 text-blueGray-600">
              MET YOU, LLC sells the source code. So, you can completely change
              it based on your requirements. Our items use many libraries, which
              are free and open source. If you need the source code of any
              library, you can just get it from its repository.
            </p>
            <h6 className="text-2xl mb-4 font-semibold">Liability</h6>
            <p className="text-md mb-2 text-blueGray-600">
              Under no circumstances shall Bigway Studio
              (https://www.bigway8.com/) team be liable for any direct,
              indirect, special, incidental or consequential damages, including,
              but not limited to, loss of data or profit, arising out of the
              use, or the inability to use, the Items and other materials from
              our website, even if Bigway Studio (https://www.bigway8.com/) team
              or an authorized representative has been advised of the
              possibility of such damages. If your use of the Items and
              materials from this site results in the need for servicing, repair
              or correction of equipment or data, you assume any costs thereof.
            </p>
            <p className="text-md mb-2 text-blueGray-600">
              Bigway Studio (https://www.bigway8.com/) will not be responsible
              for any outcome that may occur during the course of usage of our
              resources.We reserve the rights to change prices and revise the
              resources usage policy in any moment.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Licenses
