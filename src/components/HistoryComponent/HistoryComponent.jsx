import { useTranslation } from 'react-i18next';
import { getHistoryData } from '../../data/HistoryData';
import './HistoryComponent.css'
import { useContext } from 'react';
import { LanguageDirectionContext } from '../../context/LanguageDirectionContext';

const HistoryComponent = () => {
  const { t } = useTranslation();
  const historyData = getHistoryData(t);
  const { direction } = useContext(LanguageDirectionContext);

  return (
    <section className='history-sec px-64 mb-64'>
        <div className={`${direction == 'rtl' ? 'timeline-right' : 'timeline-left'}`}>
          {
            historyData.map((item, index) => (
              <div className={`${direction == 'rtl' ? 'timeline-item-right' : 'timeline-item-left'} ${item.position} ${direction == 'rtl' ? item.position+'right' : item.position+'left' }`} 
              key={index} style={{animationDelay: `${index}s`}}>
                <div className={`${direction == 'rtl' ? 'timeline-icon-right' : 'timeline-icon-left'}`}>
                  <h2>{item.date}</h2>
                  <img src={item.img} alt="icon" />
                </div>
                <div className="timeline-content">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default HistoryComponent
