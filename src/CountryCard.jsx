import React, { useContext } from 'react'
import "./flagCard.css"
import { Link } from 'react-router-dom'
import { ContextData } from './App';



function CountryCard({ name, flag, population, region, capital,idx}) {

    const [countries, index,setIndex] = useContext(ContextData)
    
    function showDetail(e) {
        setIndex(idx)
    }

    return (
        <Link to="/description">
            <div onClick={(e) => showDetail(e)} className="flagCard">
                <img className="flagImage" src={flag} />
                <div className="countryDetails">
                    <h3>{name}</h3>
                    <label>Population: </label><span>{population}</span><br />
                    <label>Region: </label><span>{region}</span><br />
                    <label>Capital: </label><span>{capital}</span>
                </div>
            </div>
        </Link>
    )
}

export default CountryCard
