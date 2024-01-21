import React from "react";
import Navbar from "../Base/component/Navbar";
import Hero from "../Base/component/Hero";
import BottomNavbar from "../Base/component/BottomNavbar";

const Home = () => {

    return (
        <>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <BottomNavbar></BottomNavbar>
            </div>
            <Hero></Hero>
        </>
    )
}

export default Home;