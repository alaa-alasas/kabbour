import { useLocation } from "react-router-dom";
import LayoutProductComponent from "../components/LayoutProductComponent/LayoutProductComponent"
import { useEffect, useState } from "react";


const Products = () => {
 const location = useLocation();
  const [selectedFilters, setSelectedFilters] = useState({});

 useEffect(() => {
    if (location.state?.selectedFilters) {
      setSelectedFilters(location.state.selectedFilters);
    }
  }, [location.state]);

  return (
    <>
      <LayoutProductComponent initialFilters={selectedFilters}/>
    </>
  )
}

export default Products
