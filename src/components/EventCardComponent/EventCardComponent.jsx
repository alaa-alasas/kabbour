import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import './EventCardComponent.css'

const EventCardComponent = ({img,eventName,eventLocation,eventDate,delay}) => {
  return (
    <div className='event-card-border' data-aos="fade-up" data-aos-duration="1500" data-aos-delay={delay * 400}>
      <div className='event-card'>
        <img src={img} alt={eventName} className='event-img'/>
        <h5>{eventName}</h5>
        <div className='event-info-row'>
          <FaLocationDot />
          <span>{eventLocation}</span>
        </div>
        <div className='event-info-row'>
          <FaCalendarDays />
          <span>{eventDate}</span>
        </div>
      </div>
    </div>
  )
}

export default EventCardComponent
