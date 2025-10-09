import Categories from "./components/Categories"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Trust from "./components/Trust"
import Products from "./pages/Products"

const App = () => {
  return (
    <div>
     <Navbar/>
     <HomePage/>
     <Trust/>
     <Products/>
     <Categories/>
     <Footer/>
    </div>
  )
}

export default App
