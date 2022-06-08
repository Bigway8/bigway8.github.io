import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import Home from './pages/home'
import About from './pages/about'
import Policy from './pages/policy'
import Terms from './pages/terms'
import Investments from './pages/investments'

import './assets/css/style.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/investments" element={<Investments />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

/* 
TODO
privat page

*/
