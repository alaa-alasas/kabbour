import './ProductsComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import {ProductsData} from '../../data/ProductsData'
import ProductCardComponent from '../ProductCardComponent/ProductCardComponent'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProductsComponent = ({category, productId}) => {
    const { t } = useTranslation();
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [cardsPerRow, setCardsPerRow] = useState(0);
    // Function to handle button click and navigate to the specified route
    const handleClick = () => {
      navigate('/products'); // Navigate to the route specified in the `to` prop
    };
    
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1500) {
          console.log("width large")
          setCardsPerRow(5); 
        } else {
          setCardsPerRow(4); 
          console.log("width small")
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);


  return (
    <section className='products-section px-64 mb-64'>
      <div className='title-section-products'>
          <TitleComponent title={t("OurProductsTitle")} />
          <BtnComponent title={t("SeeMore")} handleClick={handleClick} />
      </div>
      <div className='product-cards'>
        {
          category?  ProductsData.filter(a => a.category == category && a.productId != productId).slice(0, cardsPerRow).map((item,index) => (
            <ProductCardComponent 
            key={item.productId} 
            img={item.img} 
            productId={item.productId}
            productName={t(item.productName)} 
            productDesc={t(item.productDesc)} 
            delay={index}/>
          )) : ProductsData.slice(0, cardsPerRow).map((item,index) => (
            <ProductCardComponent 
            key={item.productId} 
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
        <BtnComponent title={t("SeeMore")} handleClick={handleClick} />
      </div>
    </section>
  )
}

export default ProductsComponent
