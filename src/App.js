import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Filter from "./Filter";
import CountryDescription from "./CountryDescription";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./app.css"


export const ContextData = React.createContext();

function App() {

  const [countries, setCountries] = useState()
  const [input, setInput] = useState("")
  const [index, setIndex] = useState(0)
  const [loader, setLoader] = useState(false)

  useEffect(async () => {
    setLoader(true)
    await fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => showData(data))
  }, [])


  let showData = (data) => {
      setLoader(false)
      setCountries(data)
      setInput("")
    
  }

  let search = () => {
    setLoader(true)
    fetch(`https://restcountries.eu/rest/v2/name/${input}`)
      .then(res => res.json())
      .then(data => showData(data))
      .catch(console.log("Eroororororo"))
  }




  return (
    <Router>
      <ContextData.Provider value={[countries, index, setIndex]}>
        <Header />

        <Switch>
          <Route path="/description">
            <CountryDescription />
          </Route>

          <Route path="/">
            <div className="App">
              <header>
                <div>
                  <input onChange={(e) => { setInput(e.target.value) }} placeholder="Search for a country..." />
                  <button onClick={search} >Search</button>
                </div>

                <div className="filter">
                  <Filter setCountries={setCountries} setLoader={setLoader} showData={showData} />
                </div>
              </header>

              {loader ? (<span className="spinner"><i className="fa fa-spinner fa-pulse fa-5x" > </i></span>) :
                <div className="flagCardsWrapper">
                  {countries && countries?.map((item, idx) => (
                    <CountryCard key={item.numericCode} {...item} idx={idx} setIndex={setIndex} />
                  ))}
                </div>
              }

            </div>
          </Route>

        </Switch>
      </ContextData.Provider>

    </Router>
  );
}

export default App;
