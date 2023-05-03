import React, { useEffect, useState } from 'react'


function Newcomponent() {
    const [set ,setadd]=useState(0)

    useEffect(()=>{
      setadd(set+1)
    })
  const handle=()=>{
         setadd(set+1)

       alert("check")
     } 
  return (
    <div>
        <h1 >{set}</h1>
        <button onClick={handle} >click me</button><br/>
        
      
    </div>
  )
  }
  

export default Newcomponent
