// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.css'

// JS Function, Random Color
const randomColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}
const Box = () => {
  const BGColor = randomColor()
  const bosStyle = {
    backgroundColor: BGColor,
    padding: 15,
    margin: 5,
    borderRadius: 10
  }
  const boxColor = (
  <div style={bosStyle}>
    <h1>{BGColor}</h1>
  </div>
  )
  return boxColor
}

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)