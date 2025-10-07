import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';



function App() {

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invaliRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)


  const validateInput = (inputTarget) => {

    const { name, value } = inputTarget
    //console.log(name,value);

    //console.log(!!value.match(/^[0-9]*\.?[0-9]+$/))

    if (name == "principle") {
      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
        setPrinciple(value)
        setInvalidPrinciple(false)
      }
      else {
        setInvalidPrinciple(true)
      }
    }

    if (name == "rate") {
      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
        setRate(value)
        setInvalidRate(false)
      }
      else {
        setInvalidRate(true)
      }
    }

    if (name == "year") {
      if (!!value.match(/^[0-9]*\.?[0-9]+$/)) {
        setYear(value)
        setInvalidYear(false)
      }
      else {
        setInvalidYear(true)
      }
    }

  }


  const handleCalculate = (e) => {

    e.preventDefault()
    if (principle == 0 || rate == 0 || year == 0) {
      setInterest(0)
    }
    else {
      const result = (principle * rate * year) / 100
      setInterest(result)
    }
    console.log(principle, rate, year);

  }

  const handleReset = () => {

    setPrinciple("");
    setRate("");
    setYear("");
    setInterest(0);

    setInvalidPrinciple(false);
    setInvalidRate(false);
    setInvalidYear(false);

  }

  return (
    <>
      <div style={{ height: "100vh" }} className=" bg-black d-flex w-100">
        <div style={{ height: "auto" }} className=" bg-white m-auto w-50 text-center rounded p-5">
          <h1 className=" fw-bold">Simple Interest Calculator</h1>
          <h4 className=" pb-3">Calculate your simple interest easily</h4>
          <div style={{ height: "auto" }} className=" bg-warning w-100 m-auto align-content-center rounded mb-3 p-4">
            <h1 className=" m-auto">₹{interest}</h1>
            <p>Total simple interest</p>
          </div>
          <form action="">
            <div className=' d-flex flex-column'>
              {/* year */}
              <TextField value={principle || ""} onChange={(e) => validateInput(e.target)} name='principle' className=' pb-2' id="outlined-basic" label="Principle Amount" variant="outlined" />

              {invalidPrinciple && <div className=' text-danger pb-4 text-start'>
                Invalid Principle Amount
              </div>}


              {/* rate */}
              <TextField value={rate || ""} onChange={(e) => validateInput(e.target)} name='rate' className=' pb-2' id="outlined-basic" label="Rate" variant="outlined" />

              {invaliRate && <div className=' text-danger pb-4 text-start'>
                Invalid Rate
              </div>}


              {/* year */}
              <TextField value={year || ""} onChange={(e) => validateInput(e.target)} name='year' className=' pb-2' id="outlined-basic" label="Year" variant="outlined" />

              {invalidYear && <div className=' text-danger pb-4 text-start'>
                Invalid Year
              </div>}



              <Stack className=' w-100' direction="row" spacing={2}>

                <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invaliRate || invalidYear} className=' w-50 p-3 fs-4 bg-success' variant="contained">CALCULATE</Button>
                <Button onClick={handleReset} className=' w-50 p-3 fs-4 text-danger border-danger' variant="outlined">RESET</Button>
              </Stack>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default App
