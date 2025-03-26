 import React from 'react'
 import { useState,useEffect } from 'react'
 
 const Timer = () => {
    // const [data,setdata ]= useState(0)
    const[time,setTime]= useState(0)
 
 
 useEffect(()=>{
       const interval =  setInterval(() => {
            setTime(prev=>prev+1)
            
        },11111111);
    },[])


   return (
     <h1>second:{time}</h1>
   )
 }
 
 export default Timer