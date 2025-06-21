import './EventsComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import {EventsData} from '../../data/EventsData'
import EventCardComponent from '../EventCardComponent/EventCardComponent'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const EventsComponent = () => {
  const { t } = useTranslation(); // Hook لجلب الترجمات
  const navigate = useNavigate(); // Initialize the useNavigate hook
    
  // Function to handle button click and navigate to the specified route
  const handleClick = () => {
    navigate('/events'); // Navigate to the route specified in the `to` prop
  };

  return (
    <section className='events-section px-64 mb-64'>
      <div className='title-section-events'>
      <TitleComponent title={t("EventsTitle")} />
          <BtnComponent title={t("SeeMore")} handleClick={handleClick} />
      </div>
      <div className='event-cards'>
        {
          EventsData.slice(0, 4).map((item,index) => (
            <EventCardComponent key={index} 
            img={item.img} 
            eventName={t(item.eventName)} 
            eventLocation={t(item.eventLocation)}
            eventDate={item.eventDate}
            delay={index}
             />
          ))
        }
      </div>
      <div className='events-show-more'>
        <div className='line'></div>
        <BtnComponent title={t("SeeMore")} handleClick={handleClick}/>
      </div>
    </section>
  )
}

export default EventsComponent
