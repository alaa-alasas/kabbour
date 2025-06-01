import { useTranslation } from 'react-i18next'
import { ProductsData } from '../../data/ProductsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import FilterComponent from '../FilterComponent/FilterComponent'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import './LayoutProductComponent.css'
import { FiltersProductData } from '../../data/FiltersProductData'
import { useState } from 'react'


const LayoutProductComponent = () => {
  const { t } = useTranslation();

  const [selectedFilters, setSelectedFilters] = useState({
    'product-type': [],
    'trademark': []
  });

  const breadcrumbItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.products'), path: null },
  ];

  
 const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const current = prev[filterType] || [];
      return {
        ...prev,
        [filterType]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value]
      };
    });
  };

  const filteredProducts = ProductsData.filter(product => {
    const matches = [];

    // 👇 التحقق من الفلاتر لكل نوع
    Object.keys(selectedFilters).forEach(filterType => {
      const filterValues = selectedFilters[filterType];

      if (filterValues.length === 0) return true; // لا يوجد شرط

      let productValue;

      if (filterType === 'product-type') {
        productValue = product.category;
      } else if (filterType === 'trademark') {
        productValue = product.trademark;
      }

      // 👇 التحقق من أن القيمة موجودة ضمن الفلاتر المختارة
      matches.push(filterValues.includes(productValue));
    });

    // 👇 يجب أن يتطابق **جميع الفلاتر المحددة**
    return matches.every(match => match);
  });

  return (
    <div className="layout-product">
      <FilterComponent
       FiltersData={FiltersProductData}
        onFilterChange={handleFilterChange}
        selectedFilters={selectedFilters}
      />
      <div className='product-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems} />
        <div className="product-cards mb-64">
          {filteredProducts.map((product, index) => (
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
  );
};

export default LayoutProductComponent;