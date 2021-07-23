import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./flagCard.css"
import { Link } from 'react-router-dom'
import "./CountryDescription.css"
import { ContextData } from './App'



function CountryDescription() {
    const [countries, index] = useContext(ContextData)

    const [descriptiveDetail, setdescriptiveDetail] = useState(countries[index])

    let newCountry = (data) => {
        setdescriptiveDetail(data);
    }


    let fetchBorder = (e) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${e.target.innerText}`)
            .then(res => res.json())
            .then(data => newCountry(data))
    }



    return (
        <>
            <div>
                <Link to="/">
                    <button className="backBtn" ><i className="fa fa-arrow-left"></i> Back</button>
                </Link><br />
            </div>

            <div className="descriptiveDetailWrapper">


                <div>
                    <img className="flagImage" src={descriptiveDetail?.flag} />
                </div>
                <div>
                    <h1>{descriptiveDetail?.name}</h1>
                    <div>
                        <p><label className="labels" >Native Name:</label> {descriptiveDetail?.nativeName}</p>

                        <p><label className="labels" >Population:</label> {descriptiveDetail?.population}</p>
                        <p><label className="labels" >Region:</label> {descriptiveDetail?.region}</p>
                        <p><label className="labels" >Subregion:</label> {descriptiveDetail?.subregion}</p>
                        <p><label className="labels" >Capital:</label> {descriptiveDetail?.capital}</p>
                        <p>
                            <label className="labels" >Currencies:</label> 
                            {descriptiveDetail?.currencies.map((item) => (<span key={item.code}>{`${item.name},`}</span>))}
                        </p>

                        <p>
                            <label className="labels" >Languages:</label> 
                            {descriptiveDetail?.languages.map((item) => (<span key={item.name}>{`${item.name}, `}</span>))}
                        </p>

                        <label><label className="labels" >Border:</label> </label>
                        {descriptiveDetail?.borders.map((item) => (<button  className="borderBtn" key={item} onClick={(e) => fetchBorder(e)} >{item}</button>))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default CountryDescription
