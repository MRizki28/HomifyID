import React from "react";
import { FaSearch } from "react-icons/fa";


const SearchHero = () => {
    return (
        <div className="relative md:bottom-7 bottom-0 mt-5 md:mt-0">
            <div className="w-full sm:max-w-2xl mx-auto max-w-[25rem]">
                <label htmlFor="default-searching" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400"></FaSearch>
                    </div>
                    <input type="searching" id="default-searching" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                    <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500-800"><FaSearch></FaSearch></button>
                </div>
            </div>
        </div>
    )
}

export default SearchHero;