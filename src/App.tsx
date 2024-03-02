import { useState } from 'react';
import Drunk from '/Drunk.png'
import './App.css'


function App() {
const [color, setColor] =useState("red");
const handleClick = async()=>{
  let [tab] =await chrome.tabs.query({currentWindow: true, active:true});
  chrome.scripting.executeScript<string[],void>({
    target:{tabId:tab.id!},
    args:[color],
    func:(color)=>{
      console.log("Daddy we here")
      document.body.style.backgroundColor=color
    }
  })
}

  return (
    <>
      <div>
      <h1>Lazy Life</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Drunk} className="logo" alt="Vite logo" />
        </a>
    
      </div>
      <div className="card">
        <input type="color" onChange={(e)=>{setColor(e.currentTarget.value);
        
        
        }} />
        <button onClick={()=>{handleClick()}}>
          CLICK ME
        </button>
      </div>
    </>
  )
}

export default App
