import { useState } from 'react';
import './App.css';
import { Button, TextField } from '@mui/material';
function App() {

  const [amount,setAmount] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const [intrest,setIntrest] = useState(0)

// console.log(amount,rate,year)
const calculate = (e)=>{
  const output = amount*year*rate/100; //equation for intrest
  console.log(output)

  setIntrest(output)
}


const reset = (e)=>{
  setAmount(0)
  setRate(0)
  setYear(0)
  setIntrest(0)
}


  return (
    <div className="App">

      <div className="container">

        <div className="header">
          <h1>Simple intrest Calculator</h1>
          <p>Calculate your simple  intrest with us 😀</p>
        </div>

        <div className="total">
          <h2>₹{intrest}</h2>
          <p>Your Total Intrest</p>
        </div>

        <div className="form">
          <form >
            <div className="input">
            <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||''} onChange={(e)=>setAmount(e.target.value)} />
            <TextField id="outlined-basic" label="Rate" variant="outlined" value={rate||''} onChange={(e)=>setRate(e.target.value)}/>
            <TextField id="outlined-basic" label="Year" variant="outlined" value={year||''} onChange={(e)=>setYear(e.target.value)}/>
            </div>

            <div className="button">
            <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
            <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;
