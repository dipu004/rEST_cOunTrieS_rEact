import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({CountriesPromise}) => {
     const [visitedCountries , setVisitedCountries] = useState([])

     const [visitedFlags , setVisitedFlags] = useState([])

     const handleVisitedFlags = (flag) => {
       const newVisitedFlags = [...visitedFlags, flag];
       setVisitedFlags(newVisitedFlags)


     }

        const countries = use(CountriesPromise)
        console.log(countries)

        const handleVisitedCountries = (country) => {
            console.log('country visited clicked to be added' , country);
            console.log(visitedCountries);

            const newVisitedCountries = [...visitedCountries , country];
            setVisitedCountries(newVisitedCountries)
        }
    return (
        <div>
            <h1> You & Me Traveling Countries {countries.length}</h1>
            <h3>Traveled So far: {visitedCountries.length}</h3>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag , index) => <img key={index} src={flag}></img>)
                }
            </div>
        <ol>
        {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ol>
       <div className='countries'>
       {
                countries.map(country => <Country key={country.cca3}  country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}>
                </Country>)
            }
       </div>
        </div>
    );
};

export default Countries;
