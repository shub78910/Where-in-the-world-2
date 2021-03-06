import React, { useEffect, useState } from 'react'
import "./app.css"


function Filter({ setCountries, setLoader, showData }) {
    let regions = ["Asia", "Americas", "Africa", "Europe", "Oceania"]

    const [selectedRegion, setSelectedRegion] = useState("")

    useEffect(() => {
        if (selectedRegion.length > 0) {
            setLoader(true)
            fetch(`https://restcountries.eu/rest/v2/region/${selectedRegion}`)
                .then(res => res.json())
                .then(data => showData(data))
                .catch(console.log("errrrrror"))
        }


    }, [selectedRegion])

    return (
        <div className="filterWrapper">
            <div data-tap-disabled="true">
                <select onChange={(e) => {setSelectedRegion(e.target.value) }}>
                    {regions.map((item) => {
                        return (
                            <option className="regionOption" key={item}>{item}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}

export default Filter
