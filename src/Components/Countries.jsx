import React, { use } from 'react';
import Country from './Country/Country';
const Countries = ({CountriesPromise}) => {
        const countries = use(CountriesPromise)
        console.log(countries)
    return (
        <div>
            <h1>Traveling Countries {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;
