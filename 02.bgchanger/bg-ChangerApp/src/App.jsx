import { useState } from 'react'
import './App.css'

function App() {
 const [color,setColor] = useState("olive");
   return (
    <div className='w-full h-screen duration-200 flex justify-center items-end' style={{backgroundColor: color}}>
      <div className=' bg-amber-200 flex justify-center items-center  gap-5 p-2  rounded-full text-2xl mb-9'>
        <button onClick={()=>setColor("red")} className='rounded-full px-3 py-5  h-8 border-2 flex items-center justify-center text-white ' style={{backgroundColor:"red"}} >red</button>
        <button onClick={()=>setColor("blue")} className='rounded-full px-3 py-5  h-8 border-2 flex items-center justify-center text-white ' style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>setColor("green")} className='rounded-full px-3 py-5  h-8 border-2 flex items-center justify-center text-white ' style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>setColor("whitesmoke")} className='rounded-full px-3 py-5  h-8 border-2 flex items-center justify-center  ' style={{backgroundColor:"whitesmoke"}}>whitesmoke</button>
        <button onClick={()=>setColor("violet")} className='rounded-full px-3 py-5  h-8 border-2 flex items-center justify-center text-white ' style={{backgroundColor:"violet"}}>violet</button>
      </div>

    </div>
  )
}

export default App
