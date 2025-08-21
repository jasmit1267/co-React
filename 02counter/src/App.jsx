import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter ] = useState(15)

  //let counter = 15
  const addvalue = () =>{
    console.log( "clicked  ",counter);
    //counter = counter +1
    setCounter(counter+1)
    
    //console.log("value add", Math.random());
    
  }

  return (
    <>
      <h1>my react code </h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button>remove value </button>
    
    </>
  )
}

export default App
