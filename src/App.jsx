import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Education from './Education'
import Projects from './Projects'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element= { <Home /> } />
        <Route path='projects' element= { <Projects /> } />
        <Route path='education' element= { <Education /> } />
      </Routes>
    </>
  )
}

export default App
