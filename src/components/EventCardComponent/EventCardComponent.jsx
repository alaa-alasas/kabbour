import { FaCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import './EventCardComponent.css'
import { useState } from "react";
import Slider from 'react-slick';
import Modal from 'react-modal'; 
import { IoMdClose } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";

const EventCardComponent = ({ img, images, eventName, eventLocation, eventDate, delay }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openVideoModal = () => {
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  
  return (
    <>
      <div className='event-card-border'
        onClick={() => openVideoModal(eventName)}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay={delay * 400}>
        <div className='event-card'>
          <img src={img} alt={eventName} className='event-img' />
          <h5>{eventName}</h5>
          <div className='event-info-row'>
            <FaLocationDot />
            <span>{eventLocation}</span>
          </div>
          <div className='event-info-row'>
            <FaCalendarDays />
            <span>{eventDate}</span>
          </div>
          <div className="event-info-row">
            <IoMdPhotos />
            <span>{images.length} </span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video Modal"
        id="event-modal"
        className="modal-content"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <button className="close-btn" onClick={closeVideoModal}><IoMdClose /></button>
        <h2>{eventName}</h2>
        <div className="modal-images">
          {images != null && images.length > 0 ? (
            <Slider {...settings}>
              {images.map((src, idx) => (
                <div key={idx} className="Slider">
                  <img src={src} alt={`صورة ${idx + 1}`} />
                </div>
              ))}
            </Slider>
          ) : (
            <p>لا يوجد صور متاحة</p>
          )}
        </div>
      </Modal>
    </>

  )
}

export default EventCardComponent
