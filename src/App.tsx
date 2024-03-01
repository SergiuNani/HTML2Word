import Drunk from '/Drunk.png'
import './App.css'

function App() {

const handleClick = async()=>{
  let [tab] =await chrome.tabs.query({currentWindow: true, active:true});
  chrome.scripting.executeScript({
    target:{tabId:tab.id!},
    func:()=>{
      console.log("Daddy we here")
      if(document.body.style.backgroundColor !="red"){

        document.body.style.backgroundColor="red"
      }
    else{
      document.body.style.backgroundColor="blue"

    }
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
        <button onClick={handleClick}>
          CLICK ME
        </button>
      </div>
    </>
  )
}

export default App
