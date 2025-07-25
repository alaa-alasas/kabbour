import HistoryComponent from "../components/HistoryComponent/HistoryComponent"
import MateBenifitComponent from "../components/MateBenifitComponent/MateBenifitComponent"
import ProductCategoryComponent from "../components/ProductCategoryComponent/ProductCategoryComponent"
import SubHeroComponent from "../components/SubHeroComponent/SubHeroComponent"
import MateArriveComponent from '../components/MateArriveComponent/MateArriveComponent'
import Map3D from "../components/Map3D/Map3D"

const About = () => {

  return (
    <div className="Responsive">
      <SubHeroComponent />
      <HistoryComponent />
      <ProductCategoryComponent />
      <MateBenifitComponent />
      <MateArriveComponent />
      <Map3D />
    </div>
  )
}

export default About
