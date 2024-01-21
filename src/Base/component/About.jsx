import React from "react";
import house2 from "../../assets/img/house/house2.png";

const About = () => {
    return (
        <div className="container mx-auto max-w-screen-xl mt-5 mb-28">
            <div className="row">
                <div className="col-lg-6 align-baseline">
                    <div className="lg:mr-[30px] mr-0">
                        <img src={house2} className="w-[32rem] h-[38rem]" alt="house2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;