import TitleComponent from '../TitleComponent/TitleComponent';
import './ProductDescriptionComponent.css';

const ProductDescriptionComponent = ({imgFlower}) => {
  return (
    /* ===========================
       Section: Product Description Section
       =========================== */
    <div className='product-description-section px-64 mb-64'>
      {/* 
        - TitleComponent: Displays the main title of the section.
        - The "title" prop is passed to dynamically set the heading text.
      */}
      <TitleComponent title={"Product Details"} />
      {/* 
        - Container for all product description content.
        - Uses Flexbox to organize content into two columns.
      */}
      <div className='product-description-container'>
        {/* 
          - First column: Contains textual information about the product.
        */}
        <div className='product-description-col'>
          {/* 
            - Subsection: Product Description
            - Includes a heading and paragraphs describing the product.
          */}
          <div className="product-description">
            <h3>Description:</h3>
            <p>
              The beverage Zhurat considered as the best which protects against colds, flu and cough that increases during the cold weather.
            </p>
            <p>
              In addition to that, it also helps to expel toxins from the body, it strengthens the immune system, And also relieves headaches, And removes bloating and helps in the process of digestion.
            </p>
          </div>

          {/* 
            - Subsection: Product Ingredients
            - Includes a heading and an unordered list of ingredients.
          */}
          <div className='product-ingredients'>
            <h3>Ingredients:</h3>
            <ul>
              <li>Damask Rose</li>
              <li>Lemon Balm</li>
              <li>Peppermint</li>
              <li>Yerba Mate</li>
              <li>Primrose</li>
              <li>Chamomile</li>
              <li>Green Tea</li>
            </ul>
          </div>

          {/* 
            - Subsection: Usage Instructions
            - Includes a heading and paragraphs explaining how to use the product.
          */}
          <div className="usage-instructions">
            <h3>How To Use:</h3>
            <p>
              To Preserve the whole delicate flavor, put a bag of campo (Natural Zhourat) in a 250 ml cup, then pour boiling water and leave it for 3 minutes.
            </p>
            <p>
              If you want a stronger taste, leave the bag in the water for 4 minutes.
            </p>
          </div>
        </div>

        {/* 
          - Second column: Contains additional product details and an image.
        */}
        <div className='product-description-col'>
          {/* 
            - Subsection: Product Specifications
            - Includes a table displaying key product details.
          */}
          <div className="product-specifications">
            <table>
              <tr>
                <td>Net Weight</td>
                <td>- 44g</td>
              </tr>
              <tr>
                <td>Bags</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Hot Drink</td>
              </tr>
              <tr>
                <td>Center</td>
                <td>Center</td>
              </tr>
              <tr>
                <td>Center</td>
                <td>Center</td>
              </tr>
              <tr>
                <td>Center</td>
                <td>Center</td>
              </tr>
            </table>
          </div>
          {/* 
            - Subsection: Product Ingredient Image
            - Displays an image related to the product's ingredients.
          */}
          <img
            className='product-ingredient-img'
            src={imgFlower}
            alt="Product Ingredients"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionComponent;