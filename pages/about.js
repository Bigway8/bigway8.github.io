import React from 'react'
import IndexNavbar from '../components/Navbars/IndexNavbar'
import CardTeamMemberProfile from 'components/Cards/CardTeamMemberProfile'
import TeamMemberProfile from 'components/json/TeamMembersProfile.json'

export default function About() {
  const [data, setData] = React.useState()
  console.log(data)

  React.useEffect(() => {
    document.querySelectorAll('.show').forEach((i) => {
      if (i) {
        const observer = new IntersectionObserver(
          (entries) => {
            observerCallback(entries, observer, i)
          },
          { threshold: 1 }
        )
        observer.observe(i)
      }
    })

    const observerCallback = (entries, observer, header) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }
  }, [])
  React.useMemo(() => {
    setData(TeamMemberProfile.teamMembers)
  }, [])
  return (
    <>
      <IndexNavbar />
      <div className="h-20"></div>
      <div className="mb-32" style={{ height: 'calc(100vh - 5rem)' }}>
        <img
          src="/img/about-bg.jpeg"
          alt=""
          className="w-full absolute"
          style={{ height: 'calc(100vh - 5rem)', objectFit: 'cover' }}
        />
        <div
          className="absolute flex place-items-center about-box"
          style={{ height: 'calc(100vh - 5rem)' }}
        >
          <div className="container mx-auto show">
            <h1 className="text-6xl text-bold text-white text-center">
              Create with our team
            </h1>
          </div>
        </div>
      </div>
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                src="/img/office.jpg"
                className="max-w-full rounded-lg shadow-lg"
                alt="office"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">A growing company</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Every year we become stronger, developing as a company and as
                  a team.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Over the past year, we have worked with a lot of great
                  companies. And this is just the beginning.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Join and grow with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-48 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Our Team</h2>
              <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                We make every experience people have with your business
                meaningful. We build brands with purpose, brands that impact the
                lives of millions, and brands that last.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {data &&
              data.map((props, index) => {
                return <CardTeamMemberProfile prop={props} key={index} />
              })}
          </div>
        </div>
      </section>
    </>
  )
}
