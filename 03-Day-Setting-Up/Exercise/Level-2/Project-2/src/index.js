// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'
// JSX element, title
const title = (
  <div className="title">
    <h1>SUBSCRIBE</h1>
  </div>
)
// JSX element, sub title
const subTitle = (
  <div className="sub-title">
    <p>Sign up with your email address to receive news and updates.</p>
  </div>
)
// JSX element, input section
const inputSection = (
  <div className="input-section">
    <input type="text" placeholder='First Name'/>
    <input type="text" placeholder='Last Name'/>
    <input type="email" placeholder='Email'/>
  </div>
)
// JSX element, button
const button = (
  <div className="button">
    <button>Subscribe</button>
  </div>
)
// JSX element, app
const app = (
  <div className='app'>
    {title}
    {subTitle}
    {inputSection}
    {button}
  </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)