import { EventsData } from '../../data/EventsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import EventCardComponent from '../EventCardComponent/EventCardComponent'
import FilterComponent from '../FilterComponent/FilterComponent'
import './LayoutEventComponent.css'

const LayoutEventComponent = () => {
   const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: null },
  ];

  return (
     <div className="layout-event">
      <FilterComponent />
      <div className='event-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="event-cards mb-64">
          {EventsData.map((event,index) => (
            <EventCardComponent 
              key={index} 
              img={event.img} 
              eventDate={event.eventDate} 
              eventLocation={event.eventLocation} 
              eventName={event.eventName}
              delay={index}
              />
          ))}
      </div>
      </div>
      
    </div>
  )
}

export default LayoutEventComponent
