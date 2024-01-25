import React, { useState } from "react";
import house3 from "../../assets/img/house/house3.png";
import house4 from "../../assets/img/house/house4.jpg";
import house5 from "../../assets/img/house/house5.jpg";
import house6 from "../../assets/img/house/house6.jpg";
import { MdOutlineKingBed } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { MdOutlineGarage } from "react-icons/md";
import { GiResize } from "react-icons/gi";



const TopSale = () => {

    const [selectedImage, setSelectionImage] = useState(null);

    const openModal = (image) => {
        setSelectionImage(image);
        document.getElementById("modal-img").showModal();
    }
    return (
        <>
            <div className="container mx-auto max-w-screen-xl mt-32 mb-28">
                <div className="flex flex-col lg:flex-row-reverse">
                    <div className="align-baseline">
                        <div className="lg:mr-[30px] mr-0">
                            <img src={house3} className="ml-2 w-[26rem] h-[28rem] lg:w-[28rem] lg:h-[32rem]" alt="house2" />
                        </div>
                    </div>
                    <div className="align-baseline mt-7 w-[100%] lg:w-[50%]">
                        <div className="relative">
                            <div className="mb-5 m-5 lg:m-0">
                                <h6 className="inline-block">
                                    <span className="text-orange-500 underline">Top Sale</span>
                                </h6>
                                <h1 className="text-[3rem] font-bold font-popins mt-5">Today Sells Properties<span className="text-orange-500 text-[3rem]">.</span></h1>
                                <p className="font-nunitoSans text-[#5C727D] max-w-lg leading-8">Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                                <div className="mt-5">
                                    <ul className="">
                                        <li className="relative leading-10 list-disc ml-5 text-orange-500">Live Music Cocerts at Luviana</li>
                                        <li className="relative leading-10 list-disc ml-5 text-orange-500">Live Music Cocerts at Luviana</li>
                                        <li className="relative leading-10 list-disc ml-5 text-orange-500">Live Music Cocerts at Luviana</li>
                                        <li className="relative leading-10 list-disc ml-5 text-orange-500">Live Music Cocerts at Luviana</li>
                                    </ul>
                                </div>
                                <div className="flex space-x-10 mt-10">
                                    <div className="flex "><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">3+</span><MdOutlineKingBed className="text-orange-400 text-[40px]"></MdOutlineKingBed></div>
                                    <div className="flex "><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">3+</span><LuBath className="text-orange-400 text-[35px]"></LuBath></div>
                                    <div className="flex "><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">3+</span><MdOutlineGarage className="text-orange-400 text-[35px]"></MdOutlineGarage></div>
                                    <div className="flex "><span className="flex justify-center items-center font-nunitoSans text-[#5C727D] text-[16px]">3+</span><GiResize className="text-orange-400 text-[35px]"></GiResize></div>
                                </div>
                                <div className="mt-10 p-0 m-0 w-[30%]  ">
                                    <div className="flex space-x-3">
                                        <img src={house4} className="" alt="house" onClick={() => openModal(house4)} />
                                        <img src={house5} alt="house" onClick={() => openModal(house5)}/>
                                        <img src={house6} alt="house" onClick={() => openModal(house6)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="modal-img" className="modal">
                <div className="modal-box">
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected House"
                            className="my-4"
                        />
                    )}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>

    )
}

export default TopSale;