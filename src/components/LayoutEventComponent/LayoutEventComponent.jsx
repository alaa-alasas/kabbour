import { useTranslation } from 'react-i18next'
import { EventsData } from '../../data/EventsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import EventCardComponent from '../EventCardComponent/EventCardComponent'
import FilterComponent from '../FilterComponent/FilterComponent'
import './LayoutEventComponent.css'
import { FiltersEventData } from '../../data/FiltersEventData'
import { useState, useEffect } from 'react'
import { useEventFilter } from '../../context/FilterEventContext';

const LayoutEventComponent = () => {
  const { t } = useTranslation();
  const { filters, updateFilter } = useEventFilter();
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const breadcrumbItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.media'), path: null },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (mobile) setShowSidebar(false);
      else setShowSidebar(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredEvents = EventsData.filter(event => {
    const matches = [];

    Object.keys(filters).forEach(filterType => {
      const filterValues = filters[filterType];

      if (filterValues.length === 0) return true;

      let eventValue;

      if (filterType === 'event-type') {
        eventValue = event.category;
      }

      matches.push(filterValues.includes(eventValue));
    });

    return matches.every(match => match);
  });


  return (
    <div className="layout-event">
      {(showSidebar || !isMobile) && (
        <FilterComponent FiltersData={FiltersEventData}
          onFilterChange={updateFilter}
          selectedFilters={filters}
          show={showSidebar}
          onClose={() => setShowSidebar(false)}
          isMobile={isMobile}
        />
      )}
      <div className='event-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems} />
        {isMobile && (
          <div className='btn-filters' >
            <a className='btn-comp' onClick={() => setShowSidebar(!showSidebar)} >{t('filters.filter-name')}</a>
          </div>
        )}
        <div className="event-cards mb-64">
          {filteredEvents.map((event, index) => (
            <EventCardComponent
              key={index}
              img={event.img}
              images={event.images}
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
