import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import  MainCarousel  from './Components/CarroselTeste.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrows from './Components/Seta.jsx';

function App() {
  return (
    <>
    <MainCarousel />
    <CustomArrows />
    </>
  )
}

export default App
