import { ProductsData } from '../../data/ProductsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import FilterComponent from '../FilterComponent/FilterComponent'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import './LayoutProductComponent.css'

const LayoutProductComponent = () => {
   const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: null },
  ];

  return (
     <div className="layout-product">
      <FilterComponent />
      <div className='product-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems}/>
        <div className="product-cards mb-64">
          {ProductsData.map((product,index) => (
            <ProductCardComponent 
              key={index} 
              img={product.img} 
              productDesc={product.productDesc} 
              productName={product.productName}
              delay={index}
            />
          ))}
      </div>
      </div>
      
    </div>
  )
}

export default LayoutProductComponent
