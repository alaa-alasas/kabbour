import { useTranslation } from "react-i18next";
import './QualityComponent.css'
import { QualityData } from './../../data/QualityData'
import BtnComponent from "../BtnComponent/BtnComponent";
import { useState } from "react";

const QualityComponent = () => {
    const { t } = useTranslation();
    const [expandedIndex, setExpandedIndex] = useState(null);
    
    const handleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
    };
    
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

  return (
    <section className='quality-sec px-64 mb-64'>    
      {
        QualityData.map((item, index) => {
          const isExpanded = expandedIndex === index; 
          const displayedDesc = isExpanded ? t(item.desc) : truncateText(t(item.desc), 30);
          return (
            <div className='card-quality-sec' key={index}>
              <div className='left-side'>
                <img src={item.src} alt={t(item.alt)} className='factory-image'/>
              </div>
              <div className='right-side'>
                <h4>{t(item.title)}</h4>
                <p>{displayedDesc}</p>
                {t(item.desc).split(' ').length > 30 && (
                  <BtnComponent
                      title={isExpanded ? t("SeeLess") : t("ReadMore")}
                      handleClick={() => handleReadMore(index)}
                  />
                )}
              </div>
            </div>)
      })
      }
    </section>
  )
}

export default QualityComponent
