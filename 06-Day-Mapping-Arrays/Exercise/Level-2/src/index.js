// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'
import {tenHighestPopulation} from './data/ten_most_highest_populations'

// Functional Component Row, Creating Rows
const Rows = ({countries}) => {
  const totalWorldPopulation = countries[0].population
  const countriesData = countries.map((country)=> {
    const percentage = (country.population / totalWorldPopulation ) * 100
    const barStyling = {
      height: '25px',
        backgroundColor: '#E9B824',
        width: percentage + '%',
        animation: 'hamid 2s ease'
    }
    
    return (
  <div className="row" key={country.population}>
    <div className="title">
      <h1 key={country.name}>{country.country}</h1>
    </div>
    <div className="progress-bar">
      <div className="bar" style={barStyling}></div>
    </div>
    <div className="population">
      <h1 key={country.population}>{country.population.toLocaleString()}</h1>
    </div>
    <style>
      @keyframes hamid {`{
      0% {
        width:0
      } 
      100% {
        width ${(country.population / totalWorldPopulation ) * 100}%
      }
      }`}
    </style>
  </div>
    )
  })
  return countriesData
}

const App = () => (
  <div className='app'>
  <h1>30 Days of React JS</h1>
  <h2>World Population</h2>
  <p>Ten Most Populated Countries</p>
      <Rows countries={tenHighestPopulation} />
  </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)