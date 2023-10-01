// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'

// Function, Random Color Generator
const randomColor = () => {
  const string = '0123456789abcdef'
  let color = ''
  for(let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * string.length )
    const character = string.charAt(randomIndex)
    color += character
  }
  return '#' + color
}
// Functional Component, ColorBox to Show Data
const ColorBox = ({ colors}) => {
  const divBox = colors.map((color) => {
    const styleNumber = {
      backgroundColor: color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    }
    return <div key={color} style={styleNumber}>{color}</div>
  })
  return divBox
}
const Box = () => {
  const colors = []
  for(let i = 0; i < 100; i++)
    colors.push(randomColor())
  return (
    <div className="container">
      <ColorBox colors={colors} />
    </div>
  )
}
const App = () => (
  <div className='app'>
  <h1>30 Days of React</h1>
  <h2>Hexadecimal Color</h2>
    <Box />
  </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)