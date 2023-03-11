import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [date,setDate] = useState(new Date()) 
    useEffect(()=>{
    setInterval(() => {
        setDate(new Date())
    }, 1000);
    },[])
  return (
    <div>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
  )
}

export default Clock