import React from 'react'
import ReactDOm from 'react-dom'
// Importing media
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'
import indexCSS from './index.css'

// JSX Element, header
const Header = (
  <div className="header">
    <h1>Front End Technology</h1>
  </div>

)
// JSX Element, main media
const Main = (
  <div className="main">
    {/* adding logo */}
    <div className="logo">
      <img src={htmlLogo} alt="HTML Logo" />
    </div>
    <div className="logo">
      <img src={cssLogo} alt="CSS Logo" />
    </div>
    <div className="logo">
      <img src={jsLogo} alt="JS Logo" />
    </div>
    <div className="logo">
      <img src={reactLogo} alt="React Logo" />
    </div>
  </div>
)
// JSX Element, App
const app = (
  <div className="app">
    {Header}
    {Main}
  </div>
)
// Getting root Element from index.html 
const rootElement = document.getElementById('root')
ReactDOm.render(app,rootElement)