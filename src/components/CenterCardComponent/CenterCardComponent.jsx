import { FaLocationDot, FaPhone } from "react-icons/fa6";
import './CenterCardComponent.css'
import { useContext } from "react";
import { LanguageDirectionContext } from "../../context/LanguageDirectionContext";

const CenterCardComponent = ({centerName,location,phone}) => {
      const { direction } = useContext(LanguageDirectionContext);

  return (
    <div className='center-card'>
      <h5>{centerName}</h5>
      <div className='center-desc'>
        <div className='center-info-row'>
          <FaLocationDot />
          <span style={{[direction === 'rtl' ? 'paddingRight' : 'paddingLeft']: '8px',}}>{location}</span>
        </div>
        <div className='center-info-row'>
          <FaPhone />
          <span style={{[direction === 'rtl' ? 'paddingRight' : 'paddingLeft']: '8px',}}>{phone}</span>
        </div>
      </div>
    </div>
  )
}

export default CenterCardComponent
