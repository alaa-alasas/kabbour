import { useTranslation } from 'react-i18next'
import { ProductsData } from '../../data/ProductsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import FilterComponent from '../FilterComponent/FilterComponent'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import './LayoutProductComponent.css'
import { FiltersProductData } from '../../data/FiltersProductData'

const LayoutProductComponent = () => {
  const { t } = useTranslation(); // Hook لجلب الترجمات
  
   const breadcrumbItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.products'), path: null },
  ];

  return (
     <div className="layout-product">
      <FilterComponent FiltersData={FiltersProductData}/>
      <div className='product-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="product-cards mb-64">
          {ProductsData.map((product,index) => (
            <ProductCardComponent 
              key={index} 
              img={product.img} 
              productId={product.productId}
              productDesc={t(product.productDesc)} 
              productName={t(product.productName)}
              delay={index}
            />
          ))}
      </div>
      </div>
      
    </div>
  )
}

export default LayoutProductComponent
