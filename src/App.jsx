import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React, { useState } from 'react'

const App = () => {

  const [result, setResult] = useState("")

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }

  const clearAc = () => {
    setResult("")
  }

  const equalsTo = () => {
    setResult(eval(result).toString())
  }

  const clearField = () => {
    setResult(result.slice(0, -1));
  }


  const percentageHandler = () => {
    try {
      const parsedResult = parseFloat(result);
      const percentage = parsedResult / 100;
      setResult(percentage.toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (

    <div className='calc'>
      <h1 className='ac'>Aousaf Caculator</h1>
      <input type="text" placeholder='0' id='ans' value={result} />
      <input type="button" value='AC' className='btn1' id='red'  onClick={clearAc} />
      <input type="button" value='⇦' className='btn1' id='reed'  onClick={clearField} />
      <input type="button" value='/' className='btn1' id='grn' onClick={clickHandler} />
      <input type="button" value='+' className='btn1' id='grn' onClick={clickHandler} />
      <input type="button" value='7' className='btn1' onClick={clickHandler} />
      <input type="button" value='8' className='btn1' onClick={clickHandler} />
      <input type="button" value='9' className='btn1' onClick={clickHandler} />
      <input type="button" value='-' className='btn1' id='grn' onClick={clickHandler} />
      <input type="button" value='4' className='btn1' onClick={clickHandler} />
      <input type="button" value='5' className='btn1' onClick={clickHandler} />
      <input type="button" value='6' className='btn1' onClick={clickHandler} />
      <input type="button" value='*' className='btn1' id='grn' onClick={clickHandler} />
      <input type="button" value='1' className='btn1' onClick={clickHandler} />
      <input type="button" value='2' className='btn1' onClick={clickHandler} />
      <input type="button" value='3' className='btn1' onClick={clickHandler} />
      <input type="button" value='=' className='btn1' id='grn' onClick={equalsTo} />
      <input type="button" value='00' className='btn1' onClick={clickHandler} />
      <input type="button" value='0' className='btn1' onClick={clickHandler} />
      <input type="button" value='.' className='btn1' onClick={clickHandler} />
      <input type="button" value='%' className='btn1' id='grn' onClick={percentageHandler} />

    </div>

  )





}

export default App
