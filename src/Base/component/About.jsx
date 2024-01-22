import React from "react";
import house2 from "../../assets/img/house/house2.png";

const About = () => {
    return (
        <div className="container mx-auto max-w-screen-xl mt-5 mb-28">
            <div className="flex">
                <div className="align-baseline">
                    <div className="lg:mr-[30px] mr-0">
                        <img src={house2} className="w-[32rem] h-[38rem]" alt="house2" />
                    </div>
                </div>
                <div className="align-baseline mt-7 w-[50%]">
                    <div className="relative">
                        <div className="mb-5">
                            <h6 className="inline-block">
                                <span className="text-orange-500 underline">About Us</span>
                            </h6>
                            <h1 className="text-[3rem] font-bold font-popins mt-5">The Leading Real Estate
                                Rental Marketplace<span className="text-orange-500 text-[3rem]">.</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;