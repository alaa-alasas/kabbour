import './EventsComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import {EventsData} from '../../data/EventsData'
import EventCardComponent from '../EventCardComponent/EventCardComponent'
import { useTranslation } from 'react-i18next'

const EventsComponent = () => {
  const { t } = useTranslation(); // Hook لجلب الترجمات

  return (
    <section className='events-section px-64 mb-64'>
      <div className='title-section-events'>
      <TitleComponent title={t("EventsTitle")} />
          <BtnComponent title={t("SeeMore")} action={'/products'} />
      </div>
      <div className='event-cards'>
        {
          EventsData.map((item,index) => (
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
        <BtnComponent title={t("SeeMore")} action={'/events'}/>
      </div>
    </section>
  )
}

export default EventsComponent
