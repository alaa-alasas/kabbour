import './AboutComponent.css'
import { AboutFactoryData } from './../../data/AboutFactoryData'
import TitleComponent from '../TitleComponent/TitleComponent'
import BtnComponent from '../BtnComponent/BtnComponent'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

const AboutComponent = () => {
    const { t } = useTranslation(); // Hook لجلب الترجمات
    // State to track which card's description is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Function to truncate text to a specific number of words
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    // Handle "Read More" button click
    const handleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
    };

  return (
    <section className='about-factory px-64 mb-64'>
      <TitleComponent title={t("AboutTitle")} />
      
      {
        AboutFactoryData.map((item, index) => {
          const isExpanded = expandedIndex === index; // Check if this card's description is expanded
          const displayedDesc = isExpanded ? t(item.desc) : truncateText(t(item.desc), 30);

          return (
                    <div className='card-about-factory' key={index} data-aos="flip-right">
                      <div className='left-side'>
                        <img src={item.src} alt={t(item.alt)} className='factory-image'/>
                        <a href={item.url} className='video-link' target='_blank'>
                          <img src="/kabbour/Icons/VideoPlay.svg" alt="video" />
                        </a>
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
                    </div>
          )
        })
      }
    </section>
  )
}

export default AboutComponent
