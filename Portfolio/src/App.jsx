import { useState , useEffect} from 'react'
import {Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Home'
import Splash from './components/Splash'
function App() {
  const [visible, setVisible]=useState(true);
  useEffect(()=>{

      const timer=setTimeout(()=>setVisible(false),8000);
      return()=>clearTimeout(timer);
  
  },[]);

  return (
    <>{ visible===true ?<>
    <Splash/>
    </>:
    <Routes>
      
      <Route path="/" element={<Home/>} />

      </Routes>}
</>
  )
}

export default App
