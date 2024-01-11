import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/Greet';
import Greet1  from './Components/Greet1';
import Welcome from './Components/Welcome';
import Count from './Components/Count';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Greeting from './Components/Greeting';
import Sheet from './Components/Sheet';
import HookComponent from './Components/HookComponent';
import HookCounter from './Components/HookCounter';
import HookArray from './Components/HookArray'
import HookUseeffect from './Components/HookUseeffect';
import HookRunOnce from './Components/HookRunOnce';
import HookInterval from './Components/HookInterval';
import Color from './Components/Color';
import HookRandom from './Components/HookRandom';

// export const Greetings=()=>{
//   return <h1> Hi friends</h1>

// }

function App() {
  
  return (
    <div className="App">
      {/* <Welcome/> */}
     {/* <Greet name="purum" company="mu-sigma">
    <p> This is children props</p></Greet>

     <Greet name="sada" company="capgemini">
      <button> enter</button>
      </Greet>
     <Greet name="shiva" company="Accenture"/>
     <Greet1 name="Jagan" company="mu-sigma"/>
     <Greet1 name="rathod" company="capgemini"/>
     <Greet1 name="Aveen" company="Accenture"/>
     <Count></Count>
     <FunctionClick/>
     <ClassClick/>
     <EventBind/> */}
     {/* <Count/>



     <Greeting name="sada"/> */}
    {/* <Sheet primary={false}/> */}
    {/* <Sheet/> */}
    {/* <HookComponent/> */}
    {/* <HookCounter/> */}
    {/* <HookArray/> */}
    {/* <HookUseeffect/> */}
    {/* <HookRunOnce/> */}
    {/* <HookInterval/> */}

    <HookRandom/>
    {/* <Color/> */}
    </div>
  );
}

export default App;
