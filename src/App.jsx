import './App.css'
import LrGenerator from './LrGenerator'
import LRForm from './LRForm'
import Navbar from './Navbar'
import lrDataContext from './utilis/lrDataContext';
import { useState } from 'react';

function App() {
  const [lrData, setLRData] = useState({
    lrDate: "",
    lrVehicleNo: "",
    startPoint: "",
    destination: "",
    consigneeName: "",
    consigneeAddress: "",
    description: "",
    weight: "",
    pinkLrCopyUrl: "",
    whiteLrCopyUrl: "",
    blueLrCopyUrl: "",
    lrNo: "",
  });
  return (
   
    < lrDataContext.Provider value={{lrData,setLRData}}>
    <Navbar/>
      <LRForm/>
      <LrGenerator/>
    </lrDataContext.Provider>
  )
}

export default App
