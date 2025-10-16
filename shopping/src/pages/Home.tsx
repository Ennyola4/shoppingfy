import { useEffect } from "react"
import About from "../components/About"
import Blog from "../components/Blog"
import Categories from "../components/Categories"
import CustomerReviews from "../components/CustomerReview"
import Display from "../components/Display"
import HeadlineTicker from "../components/HeadlineSticker"
import HomePage from "../components/HomePage"
import SecondDisplay from "../components/SecondDisplay"
import Trust from "../components/Trust"
import Products from "./Products"


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <HomePage />
            <HeadlineTicker />
            <Trust />
            <Products />
            <About />
            <Display />
            <Categories />
            <SecondDisplay />
            <Blog />
            <CustomerReviews />
        </div>
    )
}

export default Home
