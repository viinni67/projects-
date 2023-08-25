import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react'
import Warning from './components/Warning';
import About from './components/About';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom"


function App() {
  const [mode,setMode]=useState("light");
  const[Label,setLabel]=useState("enable light mode")
  
  const[Alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      typ:type
      
    })
    setTimeout(()=>{
      setAlert(null);

    },1500)
  }



  const toggle=()=>{
    if(mode==="dark"){
      setMode('light')
      
      setLabel("enable light mode")
      //document.body.style.backgroundColor='dark'
      showAlert("enabled light mode",'sucess')
    }
    else{
      setMode('dark')
      
      setLabel("enable light mode")
      showAlert("enabled dark mode",'scucess')
    }

  }
  return (
    <>
  <Router>
    <div>
      <Navbar e="about" mode={mode} toggle={toggle}  />
    </div>{' '}
     <Warning alert={Alert}/>
    <div className='container'>
      <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Text showAlert={showAlert} heading="input text please"/>
            </Route>
      </Switch>
        
    </div> 
      
       



  </Router>
    
    
    
    
    
    </>
  );
}

export default App;
