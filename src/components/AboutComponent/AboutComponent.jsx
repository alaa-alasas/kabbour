import './AboutComponent.css'
import { AboutFactoryData } from './../../data/AboutFactoryData'
import TitleComponent from '../TitleComponent/TitleComponent'
import BtnComponent from '../BtnComponent/BtnComponent'
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import Modal from 'react-modal'; 
import { IoMdClose } from "react-icons/io";

const AboutComponent = () => {
    const { t } = useTranslation(); 
    // State to track which card's description is expanded
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // حالة الفيديو
    const [currentVideoUrl, setCurrentVideoUrl] = useState(''); // رابط الفيديو

    // Function to truncate text to a specific number of words
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
    };

    // Handle "Read More" button click
    const handleReadMore = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle expanded state
    };

    const openVideoModal = (url) => {
      console.log(url)
        setCurrentVideoUrl(url);
        setIsModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsModalOpen(false);
        setCurrentVideoUrl('');
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
                        <button 
                                className='video-link' 
                                onClick={() => openVideoModal(item.url)}
                                aria-label="Watch video"
                            >
                              <img src="/Icons/VideoPlay.svg" alt="video" />
                            </button>
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
       <Modal
                isOpen={isModalOpen}
                onRequestClose={closeVideoModal}
                contentLabel="Video Modal"
                className="modal-content"
                overlayClassName="modal-overlay"
                ariaHideApp={false}>
                <button className="close-btn" onClick={closeVideoModal}><IoMdClose /></button>
                <div className="video-wrapper">
                    <iframe
                        width="100%"
                        height="500"
                        src={currentVideoUrl}
                        title=" factory video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
    </section>
  )
}

export default AboutComponent
