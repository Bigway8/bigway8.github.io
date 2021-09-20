import React from 'react'

export default function CardTeamMemberProfile(props) {
  const { prop } = props
  const [member, setMember] = React.useState()
  React.useMemo(() => {
    setMember(prop.profile)
  }, [prop])
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      {member && (
        <div className="px-6">
          <img
            alt={member.firstName}
            src={member.image}
            className="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">
              {member.firstName + ' ' + member.lastName}
            </h5>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              {member.employeePosition}
            </p>
            <div className="mt-6">
              {member &&
                member.social.map((item, index) => {
                  return (
                    <button className={item.style} type="button" key={index}>
                      <i className={`fab fa-${item.name}`}></i>
                    </button>
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
