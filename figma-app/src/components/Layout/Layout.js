import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection';
import MainPageOne from './MainPageOne';
import MainPageTwo from './MainPageTwo';
import MainPage3 from './MainPage3';
import MainPage4 from './MainPage4';
import MainPage5 from './MainPage5';
import Footer from './Footer';

const Layout =({children}) => {
  return (
    <>
    <Header/>
    <div>{children}</div>
    <HeroSection/>
    <MainPageOne/>
    <MainPageTwo/>
    <MainPage3/>
    <MainPage4/>
    <MainPage5/>
    <Footer/>
    </>
  )
}
export default Layout;

