import Image from "next/image";

import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/latestproduct";
import ShopexOffers from "./components/shopexOffer";
import Footer from "./components/footer";
import TrendingProducts from "./components/trandingProduct";
export default function Home() {
  return (
<>
     <HeroSection/>


    <LatestProducts/>
<ShopexOffers/>

    <Footer/>
    </>
        )}