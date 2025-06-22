import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {NavData , Logo} from './data/NavData'
import Home from './pages/Home'
import About from './pages/About'
import Centers from './pages/Centers'
import Products from './pages/Products'
import HandleLoadingComponent from './components/HandleLoadingComponent/HandleLoadingComponent'
import Events from './pages/Events'
import ProductDetails from './pages/ProductDetails'
// i18n.ts
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import GoToTop from './GoToTop'
import { useEffect } from 'react'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en", // اللغة الاحتياطية
});

function App() {
  const {t} = useTranslation();

  useEffect(() => {
    const updateDirection = () => {
      const dir =  localStorage.getItem('appLanguage') === 'ar' ? 'rtl' : 'ltr';
      document.body.style.fontFamily = localStorage.getItem('appLanguage') === "ar" ? '"Noto Kufi Arabic", sans-serif' : '"Roboto", sans-serif';
      document.documentElement.dir = dir;
      document.documentElement.setAttribute('lang', localStorage.getItem('appLanguage'));
      document.body.classList.toggle('rtl', dir === 'rtl');
    };
     updateDirection();
  }, [t.language]);

  return (
    <div className="bg-color-primary">
      <GoToTop />
      <HandleLoadingComponent />
      <ScrollToTop />
      <NavBarComponent img={"/kabbour/Navbar/logoK.png"} navData={NavData}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
