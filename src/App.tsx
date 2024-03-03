import {  useState } from 'react';
import Drunk from '/Drunk.png'
import './App.css'


function App() {
const [htmlContent, setHtmlContent] = useState("");
function handleClick(){
  chrome.runtime.sendMessage({ action: "getHTML" }, (response) => {
    const bodyHTML = response.bodyHTML;
    setHtmlContent(bodyHTML)
  });
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
    
        <button onClick={()=>{handleClick()}}>
          CLICK ME
        </button>
        <div>
        {htmlContent}
        </div>
      </div>
    </>
  )
}

export default App
