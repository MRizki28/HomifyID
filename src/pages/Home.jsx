import React from "react";
import Navbar from "../Base/component/Navbar";
import Hero from "../Base/component/Hero";
import BottomNavbar from "../Base/component/BottomNavbar";
import SearchHero from "../Base/component/SearchHero";
import About from "../Base/component/About";

const Home = () => {

    return (
        <>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <BottomNavbar></BottomNavbar>
            </div>
            <Hero></Hero>
            <SearchHero></SearchHero>
            <About></About>
        </>
    )
}

export default Home;