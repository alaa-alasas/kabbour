import { useTranslation } from 'react-i18next'
import { EventsData } from '../../data/EventsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import EventCardComponent from '../EventCardComponent/EventCardComponent'
import FilterComponent from '../FilterComponent/FilterComponent'
import './LayoutEventComponent.css'
import { FiltersEventData } from '../../data/FiltersEventData'

const LayoutEventComponent = () => {
  const { t } = useTranslation(); // Hook لجلب الترجمات

   const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Events', path: null },
  ];

  return (
     <div className="layout-event">
      <FilterComponent FiltersData={FiltersEventData} />
      <div className='event-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="event-cards mb-64">
          {EventsData.map((event,index) => (
            <EventCardComponent 
              key={index} 
              img={event.img} 
              eventDate={event.eventDate} 
              eventLocation={t(event.eventLocation)} 
              eventName={t(event.eventName)}
              delay={index}
              />
          ))}
      </div>
      </div>
      
    </div>
  )
}

export default LayoutEventComponent
