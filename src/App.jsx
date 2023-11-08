import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome'
import AboutMe from './components/AboutMe/AboutMe'
import Navigation from './components/Navigation/Navigation'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Welcome />
      <AboutMe />
      <Navigation />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
