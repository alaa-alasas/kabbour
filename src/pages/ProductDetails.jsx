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

  const breadcrumbItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.products'), path: '/products' },
    { label: t(item.productName) , path: null },
  ];

  return (
    <>
      <ProductHeaderComponent 
        breadcrumbItems={breadcrumbItems} 
        images={item.details.images} 
        productName={t(item.productName)}
        productDesc={t(item.productDesc)}
      />
      <ProductDescriptionComponent 
        imgFlower={item.details.flowerImg} 
        desc={t(item.details.desc,{ returnObjects: true })}
        usageInstructions={t(item.details.usageInstructions,{ returnObjects: true })}
        ingredients={t(item.details.ingredients,{ returnObjects: true })} 
        poductSpecifications={t(item.details.poductSpecifications,{ returnObjects: true })} 
      />
      <ProductsComponent title={"You may also like"}/>
    </>
  )
}

export default ProductDetails
