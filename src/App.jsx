import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificate'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import GetInTouch from './components/GetInTouch'

function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Certificates />
      <Skills />
     
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </div>
  )
}

export default App
