import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import OurBlog from './pages/OurBlog'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/our-blog' element={<OurBlog/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
