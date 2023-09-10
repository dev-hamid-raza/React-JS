// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import CSS from './index.css'
import hamidImage from './images/hamid.png'
// User Data
const user = {
  firstName: 'Hamid',
  lastName: 'Raza',
  designation: 'Junior Developer',
  country: 'Pakistan',
  skills: ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'MYSQL', 'NPM'],
  joinDate: 'Sep 06, 2023'
}
// JSX element, icon
const Icon = () => (
  <div className="icon">
    <i class="fa-solid fa-check"></i>
  </div>
)
// JSX element, title
const Title = () => (
  <div className="title">
    <h1>{user.firstName} {user.lastName} </h1> 
    <Icon />
  </div>
)
const SubTitle = () => (
  <div className="sub-title">
    <p>{user.designation}, {user.country}</p>
  </div>
)
// JSX element, header
const Header = () => (
  <div className="header">
    <div className="user-image">
      <img src={hamidImage} alt="user" />
    </div>
    <Title />
    <SubTitle />
  </div>
)
// Dealing with Skills
const skillList = user.skills.map((skill) => <li>{skill}</li>)
// JSX element, Skill Section
const SkillSection = () => (
  <div className="skill-section">
    <ul>
      {skillList}
    </ul>
  </div>
)
// JSX element, footer
const Footer = () => (
  <div className="footer">
    <p><i class="fa-regular fa-clock"></i> Joined on {user.joinDate}</p>
  </div>
)
// JSX element, app
const App = () => (
  <div className='app'>
    <Header />
    <SkillSection />
    <Footer />
  </div>
)

// To get the root element from the HTML document
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)