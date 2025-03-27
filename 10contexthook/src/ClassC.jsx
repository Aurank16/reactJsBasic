import React, { useContext } from 'react'
import { data,data1 } from './App'

function ClassC() {
    const use = useContext(data);
    const use1 = useContext(data1);
  return (
      <>
      <h1> my name is {use} and gender is {use1}</h1>
      </>
  )
}

export default ClassC