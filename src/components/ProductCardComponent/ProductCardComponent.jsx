import './ProductCardComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import { useTranslation } from 'react-i18next';

const ProductCardComponent = ({img,productId,productName,productDesc,delay}) => {
  const { t } = useTranslation();

  return (
    <div  className='product-card-border'  data-aos="fade-up" data-aos-duration="1500" data-aos-delay={delay * 400}>
      <div className='product-card'>
        <img src={img} alt={productName} />
        <div className='product-desc'>
          <h5>{productName}</h5>
          <p>{productDesc}</p>
          <BtnComponent title={t("ReadMore")} action={`/productDetails/${productId}`}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCardComponent
