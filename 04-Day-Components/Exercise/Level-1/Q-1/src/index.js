// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.css'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'

// Component, Title
const Title = () => (
  <div className="title">
    <h1>Front End Technologies</h1>
  </div>
)
// Component, HTML image
const HTML = () => (
  <div className="logo">
    <img src={htmlLogo} alt="HTML" />
  </div>
)
// Component, CSS image
const CSS = () => (
  <div className="logo">
    <img src={cssLogo} alt="CSS" />
  </div>
)
// Component, JS image
const JS = () => (
  <div className="logo">
    <img src={jsLogo} alt="JavaScript" />
  </div>
)
// Component, React Image
const ReactImage = () => (
  <div className="logo">
    <img src={reactLogo} alt="" />
  </div>
)
// Component, Container
const ImageContainer = () => (
  <div className="container">
    <HTML />
    <CSS />
    <JS />
    <ReactImage />
  </div>
)
// The App, or the parent or the container component
const App = () => (
  <div className='app'>
  <Title />
  <ImageContainer/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)