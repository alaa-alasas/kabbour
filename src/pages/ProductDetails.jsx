import { useParams } from "react-router-dom";
import ProductDescriptionComponent from "../components/ProductDescriptionComponent/ProductDescriptionComponent";
import ProductHeaderComponent from "../components/ProductHeaderComponent/ProductHeaderComponent";
import ProductsComponent from "../components/ProductsComponent/ProductsComponent";
import { ProductsData } from "../data/ProductsData";
import { useTranslation } from "react-i18next";


const ProductDetails = () => {
  const { productId } = useParams();
  const item = ProductsData.find(item => item.productId == productId);
  const { t } = useTranslation();

  return (
    <>
      <ProductHeaderComponent images={item.details.images} productName={t(item.productName)}/>
      <ProductDescriptionComponent imgFlower={item.details.flowerImg}/>
      <ProductsComponent title={"You may also like"}/>
    </>
  )
}

export default ProductDetails
