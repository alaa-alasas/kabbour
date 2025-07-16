
import { useContext, useState } from 'react';
import './ProductImageComponent.css'
import { LanguageDirectionContext } from '../../context/LanguageDirectionContext';

const ProductImageComponent = ({images}) => {
  // ===========================
  // State: currentIndex
  // ===========================
  // Tracks the index of the currently displayed image in the slider.
  const [currentIndex, setCurrentIndex] = useState(0);

  const { direction } = useContext(LanguageDirectionContext);

  // ===========================
  // Function: handlePrev
  // ===========================
  // Handles the "Previous" button click:
  // - Decrements the currentIndex if it's greater than 0.
  // - Loops back to the last image if currentIndex is already at 0.
  const handlePrev = () => {
    if(direction == 'rtl')
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    else
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  // ===========================
  // Function: handleNext
  // ===========================
  // Handles the "Next" button click:
  // - Increments the currentIndex if it's less than the last index.
  // - Loops back to the first image if currentIndex is already at the last index.
  const handleNext = () => {
    if(direction == 'rtl')
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    else
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className='image-slider-container'>
      {/* ===========================
           Main Image
           =========================== */}
      {/* Displays the main image based on the currentIndex. */}
      <img 
        className="MainImage" 
        src={images[currentIndex]} 
        alt={`Product Image ${currentIndex}`}
      />
      {/* ===========================
           Thumbnails Container with Buttons
           =========================== */}
      {/* Wraps the thumbnails and navigation arrows. */}
      <div className='Thumbnails-container-with-btn'>
        <div className='Thumbnails-container'>
          {/* ===========================
               Previous Arrow Button
               =========================== */}
          {/* Button to navigate to the previous image. */}
          <button className='arrow-prev' onClick={handlePrev}>
            <img src="/Icons/left.svg" alt="" />
          </button>
          {/* ===========================
               Thumbnails
               =========================== */}
          {/* Maps through the images array to display thumbnails. */}
          {images.map((src, index) => (
            <img
              className={`Thumbnail ${currentIndex == index ? 'active' : ''}`}
              key={index}
              src={src}
              alt={`Thumbnail ${index}`}
              onClick={() => setCurrentIndex(index)}
              style={{
                [direction === 'rtl' ? 'marginLeftt' : 'marginRight']: index === 0 ? "auto" : undefined,
                [direction === 'rtl' ? 'marginLeftt' : 'marginRight']: index === images.length - 1 ? "auto" : undefined,
                transform: `translateX( ${direction == 'rtl' ? (currentIndex * 100) : (-currentIndex * 100)}%  )`,
              }}
            />
          ))}
          {/* ===========================
               Next Arrow Button
               =========================== */}
          {/* Button to navigate to the next image. */}
          <button className='arrow-next' onClick={handleNext}>
            <img src="/Icons/right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageComponent;