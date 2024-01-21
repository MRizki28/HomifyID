import React from "react";
import Navbar from "../Base/component/Navbar";
import Hero from "../Base/component/Hero";

const Home = () => {
    return (
        <>
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <Hero></Hero>
        </>
    )
}

export default Home;