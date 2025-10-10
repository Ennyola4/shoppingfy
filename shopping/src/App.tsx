import Categories from "./components/Categories"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Trust from "./components/Trust"
import Products from "./pages/Products"
import TrendingNow from "./pages/TrendingNow"

const App = () => {
  return (
    <div>
     <Navbar/>
     <HomePage/>
     <Trust/>
     <Products/>
     <Categories/>
     <TrendingNow/>
     <Footer/>
    </div>
  )
}

export default App
