import './ProductCardComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'

const ProductCardComponent = ({img,productName,productDesc}) => {
  return (
    <div  className='product-card-border'>
      <div className='product-card'>
        <img src={img} alt={productName} />
        <div className='product-desc'>
          <h5>{productName}</h5>
          <p>{productDesc}</p>
          <BtnComponent title={"Read More"} />
        </div>
      </div>
    </div>
  )
}

export default ProductCardComponent
