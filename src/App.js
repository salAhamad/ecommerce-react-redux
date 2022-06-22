// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './view/Home';

import './App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App({store}) {
  console.log(store);
  
  return (
    <>
      <Header />
      <Home />
    </>    
  );
}

export default App;
