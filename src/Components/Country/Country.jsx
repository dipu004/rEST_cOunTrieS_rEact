import React, { useState } from 'react';
import './Country.css'
const Country = ({country , handleVisitedCountries , handleVisitedFlags}) => {
    // console.log(handleVisitedCountries)
    const [visited , setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
        handleVisitedCountries(country);
    }
    return (
        <div className={`country fav-country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            <img src={country.flags.png} alt=""/>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <button className= {visited ? 'btn-visited' : 'btn-not-visited'}onClick={handleVisited}>{visited ? 'Visited' : 'Not visited'}</button>
            <button onClick={() => {
                handleVisitedFlags(country.flags.png)
            }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;