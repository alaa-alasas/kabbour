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
    "/ProductDetails/product1.jpg",
    "/ProductDetails/product2.jpg",
    "/ProductDetails/product3.jpg",
    "/ProductDetails/product4.jpg",
    "/ProductDetails/product5.png",
    "/ProductDetails/product6.jpg",
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
