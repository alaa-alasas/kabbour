import React from 'react'
import HeroComponent from '../components/HeroComponent/HeroComponent'
import BrandSliderComponent from '../components/BrandSliderComponent/BrandSliderComponent'
import AboutComponent from '../components/AboutComponent/AboutComponent'
import ProductCategoryComponent from '../components/ProductCategoryComponent/ProductCategoryComponent'
import QualityComponent from '../components/QualityComponent/QualityComponent'
import StudyCardsComponent from '../components/StudyCardsComponent/StudyCardsComponent'
import ProductsComponent from '../components/ProductsComponent/ProductsComponent'
import EventsComponent from '../components/EventsComponent/EventsComponent'
import InfoAboutComponent from '../components/InfoAboutComponent/InfoAboutComponent'


const Home = () => {

  return (
    <>
      <HeroComponent />
      <InfoAboutComponent />
      <AboutComponent />
      <ProductCategoryComponent />
      <QualityComponent />
      <BrandSliderComponent />
      <StudyCardsComponent />
      <ProductsComponent title={"Our Products"}/>
      <EventsComponent />
    </>
  )
}

export default Home
