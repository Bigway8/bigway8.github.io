export default function CardPortfolio(props) {
  const prop = props.props
  return (
    <div className="relative">
      <div>
        <img src={`${prop.image}`} alt={prop.name} className="w-full" />
      </div>
      <div className="absolute top-0 w-full h-full">
        <div className="w-full h-full logo-title hover:logo-title">
          <h3
            className="absolute text-2xl text-white"
            style={{ bottom: '32px', left: '32px' }}
          >
            {prop.name}
          </h3>
        </div>
      </div>
    </div>
  )
}
