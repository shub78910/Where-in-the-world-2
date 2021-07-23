import React, { useEffect, useState } from 'react'
import "./app.css"


function Filter({ setCountries,setLoader,showData }) {
    let regions = ["Asia", "Americas", "Africa", "Europe", "Oceania"]

    const [selectedRegion, setSelectedRegion] = useState("")

    useEffect(() => {
        setLoader(true)  
        fetch(`https://restcountries.eu/rest/v2/region/${selectedRegion}`)
            .then(res => res.json())
            .then(data => showData(data))
            .catch(console.log("errrrrror"))


    }, [selectedRegion])

    return (
        <div className="filterWrapper">
            <select>
                {regions.map((item) => {
                    return <option className="regionOption" key={item} onClick={(e) => setSelectedRegion(e.target.innerText)}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Filter
