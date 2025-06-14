import './ProductCardComponent.css'
import BtnComponent from '../BtnComponent/BtnComponent'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ProductCardComponent = ({img,productId,productName,productDesc,delay}) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle button click and navigate to the specified route
  const handleClick = () => {
    navigate(`/productDetails/${productId}`); // Navigate to the route specified in the `to` prop
  };

  return (
    <div  className='product-card-border'  data-aos="fade-up" data-aos-duration="1500" data-aos-delay={delay * 400}>
      <div className='product-card'>
        <img src={img} alt={productName} />
        <div className='product-desc'>
          <h5>{productName}</h5>
          <p>{productDesc.slice(0, 90)} .....</p>
          <BtnComponent title={t("ReadMore")} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export default ProductCardComponent
