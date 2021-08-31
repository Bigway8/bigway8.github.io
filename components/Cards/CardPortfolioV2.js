const prefix = '/bigway8.github.io'

export default function CardPortfolio(props) {
  const prop = props.props
  return (
    <>
      {prop.id % 2 === 0 ? (
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full relative h-20"
          style={{ transform: 'translateZ(0)' }}
        >
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
              style={{ color: 'rgb(229 236 249)' }}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      ) : (
        ''
      )}
      <div
        className="mb-12 py-16 "
        style={{
          backgroundColor: `${prop.id % 2 === 0 ? 'rgb(229 236 249)' : ''}`,
        }}
      >
        <div className="container mx-auto">
          <div className="mb-12 drop-shadow" style={{ borderRadius: '8px' }}>
            <img
              src={`${prefix + prop.image}`}
              alt={`${prop.name}`}
              className="w-full"
              style={{
                height: '350px',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '8px',
              }}
            />
          </div>
          <div
            className="grid mb-12 grid-media-mobile"
            style={{ gridTemplateColumns: '2fr 3fr' }}
          >
            <div>
              <img
                src={`${prefix + prop.logo}`}
                alt={`${prop.name}`}
                className="drop-shadow_logo mb-6"
                style={{ maxWidth: '300px', borderRadius: '16px' }}
              />
            </div>
            <div style={{ textAlign: 'justify', alignSelf: 'center' }}>
              <h3 className="text-3xl  mb-2 text-bold header-media-mobile">
                {prop.name}
              </h3>
              <p className="text-md text-justify text-blueGray-600 w-8/12 text-media-mobile">
                {prop.description}
              </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href={`${prop.link}`}
              target="_blank"
              rel="noreferrer nofollow"
              className="text-bold"
              style={{ fontVariant: 'small-caps' }}
            >
              Visit page <i className="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
      {prop.id % 2 === 0 ? (
        <div
          className="-mt-12 top-0 bottom-auto left-0 right-0 w-full relative h-20"
          style={{ transform: 'translateZ(0) rotate(180deg)' }}
        >
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
              style={{ color: 'rgb(229 236 249)' }}
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
