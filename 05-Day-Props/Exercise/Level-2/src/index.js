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
// Functional Component, Bar
const Bar = (props) => {
  
  const styling = {
    color: '#fff',
    display: 'flex',
    'justify-content': 'center',
    padding: '15px',
    margin: '5px',
    'border-radius': '5px',
    backgroundColor: props.color
  }
  return (
    <div style={styling} className="box">
        <h1>{props.color}</h1>
    </div>
  )
}

// JSX element, app
const App = () => (
  <div className='app'>
  <h1>Random Colors</h1>
    <Bar color={randomColor()} />
    <Bar color={randomColor()} />
    <Bar color={randomColor()} />
    <Bar color={randomColor()} />
    <Bar color={randomColor()} />
      </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)