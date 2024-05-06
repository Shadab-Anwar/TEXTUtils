import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert =(message , type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setalert(null);
  }, 3000);
  
  const togglemode=()=>{
  if (mode==="light"){
    setmode("dark");
    document.body.style.backgroundColor="grey";
    document.body.style.Color="white";
    document.title="TEXTUtils - DARK MODE";
    showalert("darkmode active","success");
  }
  else{
    setmode("light");
    document.body.style.backgroundColor="white";
    document.body.style.Color="black";
    document.title="TEXTUtils - LIGHT MODE";
    showalert("darkmode in-active","success");
  }
}
  return (
    <>
    <Navbar title="TEXTUtils" about="About TEXTUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert} />
    <div className="container my-3">
    <Textform heading="Enter the text to analyze" mode={mode} togglemode={togglemode}/>
    {/* <About/> */}
    
    </div>
    </>
  );
}

export default App;
