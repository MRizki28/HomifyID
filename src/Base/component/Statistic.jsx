import React from "react";
import { TbResize } from "react-icons/tb";
import { MdApartment } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { GiSofa } from "react-icons/gi";
import { useSpring, animated } from "@react-spring/web";


const Statistic = () => {

    const CountingAnimation = ({ value }) => {
        const { number } = useSpring({
            from: { number: 0 },
            to: { number: value },
            config: { duration: 2000 },
        });

        return <animated.span className="font-popins text-black font-bold text-[46px] flex text-center mt-4 sm:mt-0">{number.to((val) => Math.floor(val))}</animated.span>
    }

    return (
        <div className="bg-[#F2F6F7] pb-[70px] pt-[170px]">
            <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-4 grid-cols-1 container mx-auto max-w-screen-xl">
                <div className="flex flex-col justify-center items-center">
                    <TbResize className="text-[75px] text-orange-500 leading-5" />
                    <h2 className="font-popins text-black font-bold text-[46px] flex text-center mt-4 sm:mt-0"><CountingAnimation value={500}/>+</h2>
                    <p className="text-[#5C727D] font-nunitoSans font-bold">Total Area Sq</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <MdApartment className="text-[75px] text-orange-500 leading-5 " />
                    <h2 className="font-popins text-black font-bold text-[46px] flex text-center mt-4"><CountingAnimation value={197}/>K+</h2>
                    <p className="text-[#5C727D] font-nunitoSans font-bold">Aparthments Sold</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <IoIosConstruct className="text-[75px] text-orange-500 leading-5 " />
                    <h2 className="font-popins text-black font-bold text-[46px] flex text-center mt-4"><CountingAnimation value={268}/>+</h2>
                    <p className="text-[#5C727D] font-nunitoSans font-bold">Total Constructions</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <GiSofa className="text-[75px] text-orange-500 leading-5 " />
                    <h2 className="font-popins text-black font-bold text-[46px] flex text-center mt-4"><CountingAnimation value={100}/>+</h2>
                    <p className="text-[#5C727D] font-nunitoSans font-bold">Apartio Rooms</p>
                </div>
            </div>
        </div>
    )
}

export default Statistic;