// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'

// Function, Check = checking the is number is prime, even or odd and returning specific color
const check = (number) => {

  let isPrime = true
  if (number < 2)
    isPrime = false
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      isPrime = false
      break
    }
  }
  if (isPrime) {
    return '#D83F31'
  } else {
    if ((number) % 2 === 0) {
      return '#219C90'
    } else {
      return '#E9B824'
    }
  }
}
// Functional Component, Numbers to Show Data
const Numbers = ({ numbers }) => {
  const divBox = numbers.map((number) => {
    const styleNumber = {
      backgroundColor: check(number),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    }
    return <div key={number} style={styleNumber}>{number}</div>
  })
  return divBox
}
const Box = () => {
  const number = []
  for(let i = 0; i < 100; i++)
    number.push(i)
  return (
    <div className="container">
      <Numbers numbers={number} />
    </div>
  )
}
const App = () => (
  <div className='app'>
  <h1>30 Days of React</h1>
  <h2>Number Generator</h2>
    <Box />
  </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)