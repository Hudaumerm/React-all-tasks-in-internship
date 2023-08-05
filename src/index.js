import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import UseStateimage1 from './UseStateimage1';
//import UseStateimage2 from './UseStateComponent/UseStateimage2';
//import Imagehover from './UseStateComponent/Imagehover';
//import HideShowBtndemo from './UseStateComponent/HideShowBtndemo';
//import ButtonStyleDemo from './UseStateComponent/ButtonStyleDemo';
import UseStateCardChangeDemo from './UseStateComponent/UseStateCardChangeDemo';
import PropsDemo from './PropsComponent/PropsDemo';
import SampleProps from './PropsComponent/SampleProps';
import ArrayProps from './PropsComponent/ArrayProps';
import Parent from './PropsComponent/Parent';
import TrafficLight from './MapComponent/TrafficLight';
import Parent2 from './MapComponent/Parent2';
import ListDeleteParaent from './MapComponent/ListDeleteParaent';
import ListOnly from './MapComponent/ListOnly';
import ParentUseEffect from './UseEffectComponenet/ParentUseEffect';
import App from './App';
import App1 from './UseContext/App1';
import Import1 from './Import/Import1';
//import UsestateThemeChange from './UseStateComponent/UsestateThemeChange';
//import UseStateThemeChange1 from './UseStateComponent/UseStateThemeChange1';
//import TableTask1 from './TableTask1';
//import UsestateDemo from './UsestateDemo';
//import FourCardTask from './FourCardTask';
//import Colorchangeonbuttonclick from './Colorchangeonbuttonclick';
//import ButtoncoloruseState from './ButtoncoloruseState';
//import AlertinuseState from './AlertinuseState';
//import UseStateParaChange from './UseStateParaChange';
//import UsestateCard from './UsestateCard';
//import CarousalCardTask2 from './CardCarosalTask2';
// import Sample from './Sample';
// import Task1 from './Task1';
// import Task2 from './Task2';
// import Reactbootsrapdemo from './Reactbootsrapdemo';
// import Objectdemo from './Objectdemo';
// import CardDemo from './CardDemo';
//import CarouselTask1 from './CarouselTask1'
//import MapDemo from './MapDemo';
//import CardMap from './CardMap';
//import MdbNavbar from './MdbNavbar';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';
import Redux from '../src/Redux/Redux'
import EcomApp from './ApiFetch/EcomApp';
import Thread from './Thread/Thread';
import CalculatorApp from './SimpleCalculator/CalculatorApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Task2/>
    <App />
    <Sample/>
    <Task1/>
    <Reactbootsrapdemo/>
    <Objectdemo/> 
    <CardDemo/>
    <CarouselTask1/>
    <MapDemo/>
    <CardMap/>
    <MdbNavbar/>
<CarousalCardTask1/>
<TableTask1/>
<UsestateDemo/>
<Colorchangeonbuttonclick/>
<ButtoncoloruseState/>
<AlertinuseState/>
<UseStateParaChange/>
<UsestateCard/>
<UseStateimage1/>
<UsestateThemeChange/>
<UseStateThemeChange1/>
<UseStateimage1/>
<UseStateimage2/>
<Imagehover/>
<HideShowBtndemo/>
<ButtonStyleDemo/>
<UseStateCardChangeDemo/>
<PropsDemo/>
<SampleProps/>

<ArrayProps/>
<Parent2/>   
<ListDeleteParaent/>

<Parent/>
<ParentUseEffect/>*/}
{/* <App/> */}
{/* <App1/> */}
{/* <Import1/> */}
{/* <App/> */}

<EcomApp/>
{/* <Provider store={store}>
  <Redux/>
</Provider> */}
{/* <Thread/> */}
{/* <CalculatorApp/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
