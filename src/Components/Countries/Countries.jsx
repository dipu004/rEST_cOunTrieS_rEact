import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({CountriesPromise}) => {
        const countries = use(CountriesPromise)
        console.log(countries)
    return (
        <div>
            <h1>Traveling Countries {countries.length}</h1>
       <div className='countries'>
       {
                countries.map(country => <Country key={country.cca3}  country={country}></Country>)
            }
       </div>
        </div>
    );
};

export default Countries;
