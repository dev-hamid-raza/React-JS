// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import jsLogo from './images/js_logo.png'
import reactLogo from './images/react_logo.png'
// Functional Component, Image
const Image = (props) => {
  return (
    <div className="image-box">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}
// Functional Component, Row
const Row = (props) => {
  return (
    <div className="row">
      {props.children}
    </div>
  )
}
// Functional Component, Heading
const Heading = (props) => <h1>{props.children}</h1>
// JSX element, app
const App = () => (
  <div className='app'>
  <Heading>
    Front End Technologies
  </Heading>
  <Row>
    <Image src={htmlLogo} alt='HTML logo' />
    <Image src={cssLogo} alt='CSS logo' />
    <Image src={jsLogo} alt='JS logo' />
    <Image src={reactLogo} alt='React logo' />
  </Row>
      </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)