import "tippy.js/dist/tippy.css";
import MapProvince3D from "../MapProvince3D/MapProvince3D";
import './Map3D.css'
import TitleComponent from "../TitleComponent/TitleComponent";
import { useTranslation } from "react-i18next";
import SyriaMap from "../SyriaMap/SyriaMap";

const Map3D = () => {
  const {t} = useTranslation();
  return (
    <section className="map-section px-64 mb-64">
      <TitleComponent
      title={t("expotTitle")}
      desc={t("exportDesc")} />
      <div className="map-container">
        <img className="map-world-img" src="/Distribution/world.png" alt="world"/>
        <SyriaMap />
      </div>
      

     
    </section>
  );
};

export default Map3D;