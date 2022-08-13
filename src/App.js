import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light'); //whether dark 
  // mode is enabled or not
  
  const[mode1, setMode1] = useState('light'); //whether dark mode is enabled or not
  
  const[mode2, setMode2] = useState('light'); //whether light modedark mode is enabled or not

  // *******Alert Props*********

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  // ******Dark Mode Props*********

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }


// *************GREEN MODE*************


  const toggleMode1 = () => {
    if(mode1 === 'light'){
      setMode1('white');
      document.body.style.backgroundColor = '#00F0A8'
      showAlert("Green mode has been enabled","success")
    }
    else{
      setMode1('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }


// **************BLUE MODE****************


  const toggleMode2 = () => {
    if(mode2 === 'light'){
      setMode2('dark');
      document.body.style.backgroundColor = '#6cd3f0'
      showAlert("Blue mode has been enabled","success")
    }
    else{
      setMode2('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }


  return (
   <>
    <Router>
     {/* // ******Dark Mode Props********* */}

     <Navbar title="Text Counter App"  aboutUs = "About Us" mode ={mode} toggleMode={toggleMode} mode1 = {mode1} toggleMode1={toggleMode1} mode2={mode2} toggleMode2={toggleMode2}/>


     {/* // *******Alert Props********* */}


    <Alert alert= {alert}/>

    {/* for using default props enable this */}

     {/* passing props here */}
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About mode ={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading=" Try Text Counter App - Word counter, Character Counter, Remove Extra Spaces" mode ={mode}/>
          </Route>
        </Switch>
     </div>
     </Router>
   </>
  );
}

export default App;
