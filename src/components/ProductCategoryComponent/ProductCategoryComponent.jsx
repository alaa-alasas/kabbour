import { useTranslation } from "react-i18next";
import './ProductCategoryComponent.css'
import {ProductCategoryData} from './../../data/ProductCategoryData'
import TitleComponent from '../TitleComponent/TitleComponent'

const ProductCategoryComponent = () => {
    const { t } = useTranslation(); // Hook لجلب الترجمات

  return (
    <section className='product-category-section px-64 mb-64'>
      <TitleComponent title={t("ProductsCollectionsTitle")} />
      <div className='product-category-cards'>
        {ProductCategoryData.map((item,index) => (
          <div className='product-category-card' key={index} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={index * 300}>
            <img src={item.img} alt={t(item.alt)} />
            <h5>{t(item.name)}</h5>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default ProductCategoryComponent
