import React from 'react'
import './ProductCategoryComponent.css'
import {ProductCategoryData} from './../../data/ProductCategoryData'
import TitleComponent from '../TitleComponent/TitleComponent'

const ProductCategoryComponent = () => {
  return (
    <section className='product-category-section px-64 mb-64'>
      <TitleComponent title={"Products Collections"} />
      <div className='product-category-cards'>
        {ProductCategoryData.map((item,index) => (
          <div className='product-category-card' key={index} data-aos="zoom-in" data-aos-duration="1500" data-aos-delay={index * 300}>
            <img src={item.img} alt={item.alt} />
            <h5>{item.name}</h5>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default ProductCategoryComponent
