
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries'

const CountriesPromise = fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())

function App() {


  return (
    <>
 
     <Suspense fallback={<h3>Fahad Vai going.....</h3>}>
     <Countries CountriesPromise={CountriesPromise}></Countries>
     </Suspense>

    </>
  )
}

export default App
