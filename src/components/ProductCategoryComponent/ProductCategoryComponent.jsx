import { useTranslation } from "react-i18next";
import './ProductCategoryComponent.css'
import {ProductCategoryData} from './../../data/ProductCategoryData'
import TitleComponent from '../TitleComponent/TitleComponent'
import { useNavigate } from 'react-router-dom';

const ProductCategoryComponent = () => {
    const { t } = useTranslation(); 
    const navigate = useNavigate();

    const handleCategoryClick = (categor) => {
      const filters = {
        'product-type': [categor]
      };

      navigate('/products', { state: { selectedFilters: filters } });
    };

  return (
    <section className='product-category-section px-64 mb-64'>
      <TitleComponent title={t("ProductsCollectionsTitle")} />
      <div className='product-category-cards'>
        {ProductCategoryData.map((item,index) => (
          <div className='product-category-card' key={index} data-aos="zoom-in" 
          data-aos-duration="1500" 
          data-aos-delay={index * 300} 
          onClick={() => handleCategoryClick(item.id)}>
            <img src={item.img} alt={t(item.alt)} />
            <h5>{t(item.name)}</h5>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default ProductCategoryComponent
