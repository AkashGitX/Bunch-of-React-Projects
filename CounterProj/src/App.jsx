import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter]= useState(5);
  //let counter=5;
  const addValue= ()=>{
    counter++;
    setCounter(counter);
  }

  const decrease= ()=>{
    counter--;
    setCounter(counter);
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>counter value : {counter}</h2>

    <button
    onClick={addValue}
    > Add Value</button>
    <br/>
    <button
    onClick={decrease}>
      Decrease Value</button>
    
    </>
   
  )
}

export default App
