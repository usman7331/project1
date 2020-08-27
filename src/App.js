import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';



function App({name,age}){
  return <div>
           hello from app.js updated {name} Age = {age+2}
           <br/>
         <Hello firstname={name}></Hello>
        </div>
     }

export default App;
