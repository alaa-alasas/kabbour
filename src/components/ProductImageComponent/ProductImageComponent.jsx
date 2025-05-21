
import { useState } from 'react';
import './ProductImageComponent.css'

const ProductImageComponent = ({images}) => {
  // ===========================
  // State: currentIndex
  // ===========================
  // Tracks the index of the currently displayed image in the slider.
  const [currentIndex, setCurrentIndex] = useState(0);

  // ===========================
  // Function: handlePrev
  // ===========================
  // Handles the "Previous" button click:
  // - Decrements the currentIndex if it's greater than 0.
  // - Loops back to the last image if currentIndex is already at 0.
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  // ===========================
  // Function: handleNext
  // ===========================
  // Handles the "Next" button click:
  // - Increments the currentIndex if it's less than the last index.
  // - Loops back to the first image if currentIndex is already at the last index.
  const handleNext = () => {
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
            <img src="/kabbour/Icons/left.svg" alt="" />
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
                marginLeft: index === 0 ? "auto" : undefined,
                marginRight: index === images.length - 1 ? "auto" : undefined,
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            />
          ))}
          {/* ===========================
               Next Arrow Button
               =========================== */}
          {/* Button to navigate to the next image. */}
          <button className='arrow-next' onClick={handleNext}>
            <img src="/kabbour/Icons/right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageComponent;