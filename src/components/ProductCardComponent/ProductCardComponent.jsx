import './ProductCardComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'

const ProductCardComponent = ({img,productName,productDesc,delay}) => {
  
  return (
    <div  className='product-card-border'  data-aos="fade-up" data-aos-duration="1500" data-aos-delay={delay * 400}>
      <div className='product-card'>
        <img src={img} alt={productName} />
        <div className='product-desc'>
          <h5>{productName}</h5>
          <p>{productDesc}</p>
          <BtnComponent title={"Read More"} action={'/productDetails'}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCardComponent
