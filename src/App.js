import React from 'react';
import './App.css';
import {ImageParallax} from './ImageParallax/ImageParallax'
import {AboutMe} from './AboutMe/aboutme'
import {ImageGallery} from './ImageGallery/ImageGallery'
import {ContectMe} from './Contectme/ContectMe'
import {Header} from './Header/Header'
import {Footer} from './Footer/Footer'
import first from './Content/photos/first.jpeg'
import third from './Content/photos/third.jpeg'

const image1 ="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const style =
{
  textAlign:(navigator.language==="he")?"right":"left"
}
function App() {  
  return (
    <div className="App" style={style}>
    <ImageParallax url = {first} title={true} />
    <AboutMe/>
    <ImageParallax url = {third} title={false} />
    <ImageGallery/>
    <ImageParallax url = {image1} title={false} />
    <ContectMe/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
