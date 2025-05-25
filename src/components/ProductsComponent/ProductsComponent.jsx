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
      <TitleComponent title={title} />
      <div className='product-cards'>
        {
          ProductsData.map((item,index) => (
            <ProductCardComponent key={index} img={item.img} productName={t(item.productName)} productDesc={t(item.productDesc)} delay={index}/>
          ))
        }
      </div>
      <div className='products-show-more'>
        <div className='line'></div>
        <BtnComponent title={"See More"} action={'/products'}/>
      </div>
    </section>
  )
}

export default ProductsComponent
