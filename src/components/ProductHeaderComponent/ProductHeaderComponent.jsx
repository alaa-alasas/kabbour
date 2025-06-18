import './ProductHeaderComponent.css'
import ProductImageComponent from '../ProductImageComponent/ProductImageComponent';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const ProductHeaderComponent = ({ breadcrumbItems,images,productName,productDesc,imagesDes}) => {

  return (
    <div className='product-header-section px-64 mb-64'>
      {/* ===========================
        Component: Breadcrumb
        =========================== */}
      {/* 
        - The Breadcrumb component displays the current page's navigation path.
        - It receives the breadcrumb items as a prop (items).
      */}
      <Breadcrumb items={breadcrumbItems} />
      {/* ===========================
       Section: Product Details
       =========================== */}
      {/* 
        - Main container for product details, including images and description.
        - Organized using Flexbox.
      */}
      <div className='product-details'>
        {/* 
          - A dedicated component to display the main product images.
          - Receives a list of images as a prop (images).
        */}
        <ProductImageComponent images={images} />
        {/* 
          - Container for the textual description and additional images.
        */}
        <div className='product-header-description'>
          {/* ===========================
           Subsection: Product Header Description Text
           =========================== */}
          {/* 
            - Section containing the product title and textual description.
          */}
          <div className='product-header-description-text'>
            {/* 
              - Product title (H4): Displays the product name.
              - Uses a large font size and a distinctive color to grab attention.
            */}
            <h4>{productName}</h4>
            {/* 
              - Product description (P): Provides detailed information about the product.
              - Uses a smaller font size and neutral colors for readability.
            */}
            <p>
              {productDesc}
            </p>
          </div>
          {/* ===========================
           Subsection: Product Header Images
           =========================== */}
          {/* 
            - Section containing small illustrative images of the product.
            - Images are displayed side by side using Flexbox.
          */}
          <div className="product-header-images">
            {
              imagesDes.map((img, index) => (
                <img src={img} alt="" key={index} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeaderComponent;