import React from "react";
import TopBar from "../../Components/TopBar";
import HeroBlocks from "../../Components/HeroBlocks";
import Features from "../../Components/Features";
import Listings from "../../Components/Listings";
import PopularListings from "../../Components/PopularListings";

const Home = () => {
    return <>
         <TopBar />
         <HeroBlocks />
         <Features />
         <Listings />
         <PopularListings/>
    </>;
};

export default Home;