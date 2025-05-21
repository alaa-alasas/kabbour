import './CenterCardComponent.css'

const CenterCardComponent = ({centerName,location,phone}) => {
  return (
    <div className='center-card'>
      <h5>{centerName}</h5>
      <div className='center-desc'>
        <div className='center-info-row'>
          <img src="/Icons/location.svg" alt="location" />
          <span>{location}</span>
        </div>
        <div className='center-info-row'>
          <img src="/Icons/phone.svg" alt="phone" />
          <span>{phone}</span>
        </div>
      </div>
    </div>
  )
}

export default CenterCardComponent
