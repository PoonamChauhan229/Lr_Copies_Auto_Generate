import { useState ,useContext} from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import lrDataContext from './utilis/lrDataContext';

const LRForm = () => {
  const { lrData, setLRData } = useContext(lrDataContext);
  const navigate=useNavigate()   
    const [lrNo,setLrNo]=useState(lrData.lrNo)
    const [lrDate,setLrDate]=useState(lrData.lrDate)
    const [lrVehicleNo,setVehicleNo]=useState("")
    const [startPoint,setStartPoint]=useState("")
    const [destination,setDestination]=useState("")
    const [consigneeName,setConsigneeName]=useState("")
    const [consigneeAddress,setConsigneeAddress]=useState("")
    const [description,setDescription]=useState("")
    const [weight,setWeight]=useState("")
    const [pinkLrCopyUrl,setpinkLrCopyUrl]=useState("")
    const [whiteLrCopyUrl,setwhiteLrCopyUrl]=useState("")
    const [blueLrCopyUrl,setblueLrCopyUrl]=useState("")

    

    const generateLr=()=>{
      const newLr={lrNo,lrDate,lrVehicleNo,startPoint,destination,consigneeName,consigneeAddress,description,weight,pinkLrCopyUrl,whiteLrCopyUrl,blueLrCopyUrl}
      console.log(lrData)
      setLRData(newLr)
      console.log(lrData)
      postLr(newLr)
     
      
      }
      const postLr=async(newLr)=>{
        const data=await fetch('https://660536172ca9478ea17fb338.mockapi.io/sadhavi/lr/',{
          method:"POST",
          body:JSON.stringify(newLr),
          headers:{
            "Content-Type":"application/json"
          }
        })
        const res=await data.json()
        console.log(res)
      }
  return (

    <>
      

    <Box sx={{margin:"4% 15% 0px 15%"}}>      
      <TextField 
      sx={{
        width:"30%",
        margin:"1%"
      }}
      id="filled-basic" label="LR No" variant="filled" value={lrNo}  onChange={(e)=>setLrNo(e.target.value)} />

      <TextField  
      sx={{
        width:"30%",
        margin:"1%"
      }}
      id="filled-basic" label="LR Date" variant="filled" value={lrDate} onChange={(e)=>setLrDate(e.target.value)}/>

      <TextField  sx={{
        width:"30%",
        margin:"1%"
      }}
       id="filled-basic" label="Vehicle No" variant="filled" value={lrVehicleNo}  onChange={(e)=>setVehicleNo(e.target.value)}/>
      <TextField  sx={{
        width:"30%",
        margin:"1%"
      }}
      id="filled-basic" label="From" variant="filled" value={startPoint}  onChange={(e)=>setStartPoint(e.target.value)}/>

      <TextField  sx={{
        width:"30%",
        margin:"1%"
      }}
      id="filled-basic" label="To" variant="filled" value={destination}  onChange={(e)=>setDestination(e.target.value)}/>

<TextField  sx={{
        width:"30%",
        margin:"1%"
      }}
      id="filled-basic" label="Weight" variant="filled" value={weight}  onChange={(e)=>setWeight(e.target.value)}/>

    <TextField  sx={{
        width:"46%",
        margin:"1%"
      }}
      id="filled-basic" label="Consignee Name" variant="filled" value={consigneeName}  onChange={(e)=>setConsigneeName(e.target.value)}/>

<TextField  sx={{
        width:"46%",
        margin:"1%"
      }}
      id="filled-basic" label="Consignee Address" variant="filled" value={consigneeAddress}  onChange={(e)=>setConsigneeAddress(e.target.value)}/>   

  

<TextField  sx={{
        width:"94%",
        margin:"1%"
      }}
      id="filled-basic" label="Description" variant="filled" value={description}  onChange={(e)=>setDescription(e.target.value)}/>

      <Button 
        sx={{
          width:"30%",
          margin:"1% 35% 1% 35%",
          padding:"1%"
        }} 
      variant="contained" onClick={()=>generateLr()}>Generate LR</Button>
    
    </Box>
    </>
  )
}

export default LRForm;