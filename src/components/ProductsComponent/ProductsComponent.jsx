import './ProductsComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import {ProductsData} from '../../data/ProductsData'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import { useTranslation } from 'react-i18next'

const ProductsComponent = ({title}) => {
    const { t } = useTranslation();

  return (
    <section className='products-section px-64 mb-64'>
      <div className='title-section-products'>
          <TitleComponent title={t("OurProductsTitle")} />
          <BtnComponent title={t("SeeMore")} action={'/products'} />
      </div>
      <div className='product-cards'>
        {
          ProductsData.slice(0, 4).map((item,index) => (
            <ProductCardComponent 
            key={index} 
            img={item.img} 
            productId={item.productId}
            productName={t(item.productName)} 
            productDesc={t(item.productDesc)} 
            delay={index}/>
          ))
        }
      </div>
      <div className='products-show-more'>
        <div className='line'></div>
        <BtnComponent title={t("SeeMore")} action={'/products'} />
      </div>
    </section>
  )
}

export default ProductsComponent
