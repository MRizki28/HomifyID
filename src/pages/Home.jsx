import React from "react";
import Navbar from "../Base/component/Navbar";
import Hero from "../Base/component/Hero";
import BottomNavbar from "../Base/component/BottomNavbar";
import SearchHero from "../Base/component/SearchHero";
import About from "../Base/component/About";
import Statistic from "../Base/component/Statistic";

const Home = () => {

    return (
        <>
            <Navbar></Navbar>
            <BottomNavbar></BottomNavbar>
            <Hero></Hero>
            <SearchHero></SearchHero>
            <About></About>
            <Statistic></Statistic>
        </>
    )
}

export default Home;