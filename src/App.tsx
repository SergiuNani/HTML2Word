import Drunk from '/Drunk.png'
import  { useState } from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph } from 'docx';
// import Drunk from 'Drunk.png';
import './App.css';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  const handleClick = () => {
    chrome.runtime.sendMessage({ action: 'getHTML' }, (response) => {
      const bodyHTML = response.bodyHTML;
      setHtmlContent(bodyHTML);
    });
  };

  const generateDoc = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph('Hello World'),
            new Paragraph('Hello World , I love you'),
            new Paragraph('Hello World, I hate  you'),
  
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, 'example.docx');
      console.log('Document created successfully');
    });
  };
  
  return (
    <>
      <div>
        <h1>Lazy Life</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Drunk} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={handleClick}>CLICK ME</button>
        <button onClick={generateDoc}>To Word</button>
        <div>{htmlContent}</div>
      </div>
    </>
  );
}

export default App;
