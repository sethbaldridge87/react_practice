import React from 'react';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import WarningBanner from './components/WarningBanner';
import NumberList from './components/NumberList';
import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation';
import BoilingVerdict from './components/BoilingVerdict';
import Calculator from './components/Calculator';
import FancyBorder from './components/FancyBorder';
import './App.css';
// import { tsPropertySignature } from '@babel/types';

function App() {
  return (
    <div>
      {/* <Clock />
      <Toggle />
      <LoginControl />
      <WarningBanner />
      <NumberList 
        numbers = {[1,2,3,4,5]}
      />
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation /> 
      <BoilingVerdict /> */}
      <Calculator />
      <FancyBorder />
    </div>
  );
}

export default App;
