import { useState } from 'react';
import './App.css'

function App() {
let [c,setc]= useState(0);
function addvalue(){
  if(c <=19){
    setc(c + 1);
    console.log(`count is `, c);
  }
  
}
function subvalue(){
  if(c >0){
    setc(c - 1);
    console.log(`count is `, c);
  }
}

  return (
    <>
      <h1>Counter App</h1>
      <div className='counterdiv'>
        <button onClick={subvalue} > - </button>
        <h3> {c} </h3>
        <button onClick={addvalue}> + </button>
      </div>
    </>
  );
}

export default App
