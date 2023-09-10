// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import style from './index.css'
// JSX Component, Title
const Title = () => <h1>SUBSCRIBE</h1>
// JSX Component, SubTitle
const SubTitle = () => <p>Sign up with your email to receive news and updates</p>
// JSX Component, FirstName
const FirstName = () => <input type="text" placeholder='First Name' />
// JSX Component, LastName
const LastName = () => <input type="text" placeholder='Last Name' />
// JSX Component, Email
const Email = () => <input type="email" name="" id=" " placeholder='Email' />
// JSX Component, InputSection
const InputSection = () => (
  <div className="input-section">
    <FirstName />
    <LastName />
    <Email />
  </div>
)
// JSX Component, Button
const Button = () => <button>Subscribe</button>
const ButtonSection = () => (
  <div className="button-section">
    <Button />
  </div>
)
// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Title />
    <SubTitle />
    <InputSection />
    <ButtonSection />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)