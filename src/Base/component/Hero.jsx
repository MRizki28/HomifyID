import React from "react";
import house from "../../assets/img/house/house1.png";
import { FaHome } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-[#F2F6F7] dark:bg-gray-900">
            <div className="flex  flex-col max-w-screen-xl px-4 py-8 mx-auto lg:flex-row">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h3 className="flex space-x-2"><FaHome className="text-orange-500 text-xl" /><span>Real Estate Agency </span></h3>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Find your dreams house</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to Sales
                    </a>
                </div>
                <div className="lg:mt-0 lg:col-span-5 flex">
                    <img src={house} className="max-w-full ml-0 lg:ml-10" alt="mockup" />
                </div>
            </div>
        </section>
    )
}

export default Hero;