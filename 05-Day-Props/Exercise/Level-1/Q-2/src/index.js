// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'

// Functional Component, Row
const Row = (props) => {
  return (
    <div className="row">
      {props.children}
    </div>
  )
}
// Functional Component, Heading
const Heading = (props) => <h1>{props.text}</h1>
// Functional Component, SubHeading
const SubHeading = (props) => <p>{props.text}</p>
//Functional component, Input
const Input = (props) => <input type="text" placeholder={props.placeholder}/>
// Functional Component, Button
const Button = (props) => <button>{props.text}</button>
// JSX element, app
const App = () => (
  <div className='app'>
    <Heading text='SUBSCRIBE' />
    <SubHeading text='Sign up with your email address to receive news and updates' />
    <Row>
      <Input placeholder='First Name' />
      <Input placeholder='Last Name' />
      <Input placeholder='Email Name' />
    </Row>
    <Row>
      <Button text='Subscribe' />
    </Row>
      </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)