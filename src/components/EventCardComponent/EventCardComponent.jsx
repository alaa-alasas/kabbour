import React from 'react'
import './EventCardComponent.css'

const EventCardComponent = ({img,eventName,eventLocation,eventDate}) => {
  return (
    <div className='event-card-border'>
      <div className='event-card'>
        <img src={img} alt={eventName} className='event-img'/>
        <h5>{eventName}</h5>
        <div className='event-info-row'>
          <img src="/Icons/famicons_location.svg" alt="location" />
          <span>{eventLocation}</span>
        </div>
        <div className='event-info-row'>
          <img src="/Icons/calendar.svg" alt="calendar" />
          <span>{eventDate}</span>
        </div>
      </div>
    </div>

  )
}

export default EventCardComponent
