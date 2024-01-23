import React from "react";
import house2 from "../../assets/img/house/house2.png";
import { SiHomebridge } from "react-icons/si";
import { DiModernizr } from "react-icons/di";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";

const About = () => {
    return (
        <div className="container mx-auto max-w-screen-xl mt-5 mb-28">
            <div className="flex flex-col lg:flex-row">
                <div className="align-baseline">
                    <div className="lg:mr-[30px] mr-0">
                        <img src={house2} className="w-[32rem] h-[38rem]" alt="house2" />
                    </div>
                </div>
                <div className="align-baseline mt-7 w-[100%] lg:w-[50%]">
                    <div className="relative">
                        <div className="mb-5 m-5 lg:m-0">
                            <h6 className="inline-block">
                                <span className="text-orange-500 underline">About Us</span>
                            </h6>
                            <h1 className="text-[3rem] font-bold font-popins mt-5">The Leading Real Estate
                                Rental Marketplace<span className="text-orange-500 text-[3rem]">.</span></h1>
                            <p className="font-nunitoSans text-[#5C727D] max-w-lg leading-8">Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                            <div className="grid grid-cols-2 gap-4 mt-10 ">
                                <div className="flex space-x-3"><SiHomebridge className="text-orange-400 text-[40px]"></SiHomebridge><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">Smart Home Design</span></div>
                                <div className="flex space-x-3"><DiModernizr className="text-orange-400 text-[40px]"></DiModernizr><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">Modern Design</span></div>
                                <div className="flex space-x-3"><MdOutlineHealthAndSafety className="text-orange-400 text-[40px]"></MdOutlineHealthAndSafety><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">Exception Lifestyle</span></div>
                                <div className="flex space-x-3"><SiSpringsecurity className="text-orange-400 text-[40px]"></SiSpringsecurity><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">Complete 24/7 Security</span></div>
                            </div>
                            <div className=" mt-10 p-6 m-3 border-l-4 border-orange-500 bg-orange-50">
                                <p className="text-[#5C727D]">Get your dreams house in a life</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;