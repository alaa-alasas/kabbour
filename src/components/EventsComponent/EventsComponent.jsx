import React from 'react'
import './EventsComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import {EventsData} from '../../data/EventsData'
import EventCardComponent from '../EventCardComponent/EventCardComponent'

const EventsComponent = () => {

  return (
    <section className='events-section px-64 mb-64'>
      <TitleComponent title={"Events"} />
      <div className='event-cards'>
        {
          EventsData.map((item,index) => (
            <EventCardComponent key={index} 
            img={item.img} 
            eventName={item.eventName} 
            eventLocation={item.eventLocation}
            eventDate={item.eventDate}
            delay={index}
             />
          ))
        }
      </div>
      <div className='events-show-more'>
        <div className='line'></div>
        <BtnComponent title={"See More"} />
      </div>
    </section>
  )
}

export default EventsComponent
