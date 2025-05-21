import HistoryComponent from "../components/HistoryComponent/HistoryComponent"
import MateBenifitComponent from "../components/MateBenifitComponent/MateBenifitComponent"
import ProductCategoryComponent from "../components/ProductCategoryComponent/ProductCategoryComponent"
import SubHeroComponent from "../components/SubHeroComponent/SubHeroComponent"
import MateArriveComponent from '../components/MateArriveComponent/MateArriveComponent'
import IraqMapWithGoogleMaps from "../components/Map3D/Map3D"

const About = () => {

  return (
    <>
      <SubHeroComponent />
      <HistoryComponent />
      <MateBenifitComponent />
      <ProductCategoryComponent />
      <MateArriveComponent />
      <IraqMapWithGoogleMaps />
    </>
  )
}

export default About
