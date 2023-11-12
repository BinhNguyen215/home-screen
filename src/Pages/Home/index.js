import React from "react";
import TopBar from "../../Components/TopBar";
import HeroBlocks from "../../Components/HeroBlocks";
import Features from "../../Components/Features";
import Listings from "../../Components/Listings";
import PopularListings from "../../Components/PopularListings";
import SignUp from "../../Components/SignUp";
import Introduce from "../../Components/Introduce";
import Footer from "../../Components/Footer";

const Home = () => {
    return <>
         <TopBar />
         <HeroBlocks />
         <Features />
         <Listings />
         <PopularListings />
         <SignUp />
         <Introduce />
         <Footer />
    </>;
};

export default Home;