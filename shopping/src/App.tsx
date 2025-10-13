import About from "./components/About"
import Blog from "./components/Blog"
import Categories from "./components/Categories"
import CustomerReviews from "./components/CustomerReview"
import Display from "./components/Display"
import Footer from "./components/Footer"
import HeadlineTicker from "./components/HeadlineSticker"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import SecondDisplay from "./components/SecondDisplay"
import Trust from "./components/Trust"
import Products from "./pages/Products"
import TrendingNow from "./pages/TrendingNow"

const App = () => {
  return (
    <div>
     <Navbar/>
     <HomePage/>
     <HeadlineTicker/>
     <Trust/>
     <Products/>
     <About/>
     <Display/>
     <Categories/>
     <SecondDisplay/>
     <TrendingNow/>
     <Blog/>
     <CustomerReviews/>
     <Footer/>
    </div>
  )
}

export default App
