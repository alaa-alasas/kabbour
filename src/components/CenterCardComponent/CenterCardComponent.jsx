import { FaLocationDot, FaPhone } from "react-icons/fa6";
import './CenterCardComponent.css'

const CenterCardComponent = ({centerName,location,phone}) => {
  return (
    <div className='center-card'>
      <h5>{centerName}</h5>
      <div className='center-desc'>
        <div className='center-info-row'>
          <FaLocationDot />
          <span>{location}</span>
        </div>
        <div className='center-info-row'>
          <FaPhone />
          <span>{phone}</span>
        </div>
      </div>
    </div>
  )
}

export default CenterCardComponent
