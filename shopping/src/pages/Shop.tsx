import { useEffect } from "react"
import CategorySummary from "../components/CategorySummary"
import CustomerReviews from "../components/CustomerReview"
import HeadlineTicker from "../components/HeadlineSticker"
import TrendingNow from "./TrendingNow"

const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <TrendingNow />
            <HeadlineTicker />
            <CategorySummary />
            <CustomerReviews />
        </div>
    )
}

export default Shop
