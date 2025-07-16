import './EventsComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import {EventsData} from '../../data/EventsData'
import EventCardComponent from '../EventCardComponent/EventCardComponent'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const EventsComponent = () => {
  const { t } = useTranslation(); // Hook لجلب الترجمات
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [cardsPerRow, setCardsPerRow] = useState(0);

  // Function to handle button click and navigate to the specified route
  const handleClick = () => {
    navigate('/events'); // Navigate to the route specified in the `to` prop
  };
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1500) {
        console.log("width large")
        setCardsPerRow(5); 
      } else {
        setCardsPerRow(4); 
        console.log("width small")
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='events-section px-64 mb-64'>
      <div className='title-section-events'>
      <TitleComponent title={t("EventsTitle")} />
          <BtnComponent title={t("SeeMore")} handleClick={handleClick} />
      </div>
      <div className='event-cards'>
        {
          EventsData.slice(0, cardsPerRow).map((item,index) => (
            <EventCardComponent key={index} 
            img={item.img} 
            images={item.images}
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
