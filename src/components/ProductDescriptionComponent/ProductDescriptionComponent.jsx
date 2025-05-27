import { useContext } from 'react';
import { LanguageDirectionContext } from '../../context/LanguageDirectionContext';
import TitleComponent from '../TitleComponent/TitleComponent';
import './ProductDescriptionComponent.css';
import { useTranslation } from 'react-i18next';

const ProductDescriptionComponent = ({imgFlower,desc,ingredients,usageInstructions,poductSpecifications}) => {
  const { direction } = useContext(LanguageDirectionContext);
  const { t } = useTranslation();

  return (
    /* ===========================
       Section: Product Description Section
       =========================== */
    <div className='product-description-section px-64 mb-64'>
      {/* 
        - TitleComponent: Displays the main title of the section.
        - The "title" prop is passed to dynamically set the heading text.
      */}
      <TitleComponent title={t("productDetails")} />
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
            <h3>{t('product.1.details.descTitle')}:</h3>
            {desc.map((item,index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          {/* 
            - Subsection: Product Ingredients
            - Includes a heading and an unordered list of ingredients.
          */}
          <div className='product-ingredients'>
            <h3>{t('product.1.details.IngredientsTitle')}:</h3>
            <ul>
              {ingredients.map((item,index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 
            - Subsection: Usage Instructions
            - Includes a heading and paragraphs explaining how to use the product.
          */}
          <div className="usage-instructions">
            <h3>{t('product.1.details.usageInstructionsTitle')}:</h3>
            {usageInstructions.map((item,index) => (
              <p key={index}>{item}</p>
            ))}
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
              {poductSpecifications.map((item,index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                </tr>
              ))}
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