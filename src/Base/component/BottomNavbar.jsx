import React from "react";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
    return (
        <div className="lg:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <Link to="/" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaHome className="w-[100px] h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-500" />
                    <span className="sr-only">Home</span>
                </Link>

                <Link className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaInfoCircle className="w-[100px] h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-500" />
                    <span className="sr-only">About</span>
                </Link>

                <Link className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <MdMiscellaneousServices className="w-[100px] h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-500" />
                    <span className="sr-only">Service</span>
                </Link>

                <Link className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaCartArrowDown className="w-[100px] h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-500" />
                    <span className="sr-only">Cart</span>
                </Link>

                <Link className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-500 dark:group-hover:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span className="sr-only">Profile</span>
                </Link>
                <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Profile
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>

    )
}

export default BottomNavbar;