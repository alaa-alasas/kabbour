import { useTranslation } from 'react-i18next'
import { ProductsData } from '../../data/ProductsData'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import FilterComponent from '../FilterComponent/FilterComponent'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import SearchInput from '../InputSearchCustom/InputSearchCustom'
import { FiltersProductData } from '../../data/FiltersProductData'
import { useEffect, useState } from 'react'
import PaginationCustom from '../PaginationCustom/PaginationCustom';
import { useProductFilter } from '../../context/FilterProductContext';
import './LayoutProductComponent.css'

const LayoutProductComponent = ({  }) => {
  const { t } = useTranslation();
  const { filters, updateFilter } = useProductFilter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const breadcrumbItems = [
      { label: t('nav.home'), path: '/' },
      { label: t('nav.products'), path: null },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (mobile) setShowSidebar(false);
      else setShowSidebar(true);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const filteredProducts = ProductsData.filter(product => {
    const matches = [];

    Object.keys(filters).forEach(filterType => {
      const filterValues = filters[filterType];

      if (filterValues.length === 0) return true;

      let productValue;

      if (filterType === 'product-type') {
        productValue = product.category;
      } else if (filterType === 'trademark') {
        productValue = product.brand;
      }

      matches.push(filterValues.includes(productValue));
    });

    const translatedProductName = t(product.productName).toLowerCase();
    const isMatchedSearch = translatedProductName.includes(searchQuery.toLowerCase());

    return matches.every(match => match) && isMatchedSearch;
  });

  // Calculate pagination values
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

   const Search = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="layout-product">
      {(showSidebar || !isMobile) && (
        <FilterComponent
          FiltersData={FiltersProductData}
          onFilterChange={updateFilter}
          selectedFilters={filters}
          show={showSidebar} 
          onClose={() => setShowSidebar(false)} 
          isMobile={isMobile}
        />
      )}

      <div className='product-cards-braadcrumb px-64'>
        <Breadcrumb items={breadcrumbItems} />
        {isMobile && (
          <div className='btn-filters' >
            <a className='btn-comp' onClick={() => setShowSidebar(!showSidebar)} >{t('filters.filter-name')}</a>
          </div>    
        )}
        <SearchInput
          placeholder="Search product by name"
          onSearch={Search} 
        />
        <div className="product-cards mb-64">
          {paginatedProducts.map((product, index) => (
            <ProductCardComponent
              key={product.productId}
              img={product.img}
              productId={product.productId}
              productDesc={t(product.productDesc)}
              productName={t(product.productName)}
              delay={index}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <PaginationCustom
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default LayoutProductComponent;