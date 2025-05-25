import ProductDescriptionComponent from "../components/ProductDescriptionComponent/ProductDescriptionComponent";
import ProductHeaderComponent from "../components/ProductHeaderComponent/ProductHeaderComponent";
import ProductsComponent from "../components/ProductsComponent/ProductsComponent";


const ProductDetails = () => {

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'ProductName', path: null },
  ];

  const images = [
    "/kabbour/ProductDetails/22.png",
    "/kabbour/ProductDetails/Minit.png",
    "/kabbour/ProductDetails/Anise.png",
    "/kabbour/ProductDetails/Hibiscus.png",
    "/kabbour/ProductDetails/Moutain.png",
    "/kabbour/ProductDetails/Rosemary.png",
    "/kabbour/ProductDetails/inflationAndGases.png",
    "/kabbour/ProductDetails/inflationAndGases-ar.png",
    "/kabbour/ProductDetails/product2.jpg",
    "/kabbour/ProductDetails/product3.jpg",
    "/kabbour/ProductDetails/product4.jpg",
    "/kabbour/ProductDetails/product5.png",
    "/kabbour/ProductDetails/product6.jpg",
  ];

  return (
    <>
      <ProductHeaderComponent breadcrumbItems={breadcrumbItems} images={images} />
      <ProductDescriptionComponent />
      <ProductsComponent title={"You may also like"}/>
    </>
  )
}

export default ProductDetails
