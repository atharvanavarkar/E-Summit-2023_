import React, { useState } from "react";
import "../css/pastspeaker.css";

function PastSpeakers(props) {

    return (<>
        <div style={{
          backgroundImage: `url("./data/img/pastspeakers.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }} >
            <div className="flex flex-col justify-center items-center px-8 pb-20 ">
                <h1 className="title3 wow animate__animated animate__fadeInUp">PAST SPEAKERS</h1>
                <div className="flex justify-center items-center w-full lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 px-6 md:px-8 divcontainer ">
                        {props.pastspeaker.map((val, ind) => (
                            <div className="group relative items-center justify-center overflow-hidden cursor-pointer rounded-3xl hover:shadow-black/30 wow animate__animated animate__fadeInUp card hover:scale-105">
                                <div className="h-full w-full">
                                    <img loading="lazy" className="h-full w-full object-cover m-0" src={val.img} alt="image is loading" />
                                </div>
                                <div className="w-full absolute inset-0 flex flex-col-reverse">
                                    <div className="w-full  items-center justify-center text-center [65%]  translate-y-[51%] bg-[#ffffff85] ">
                                        <div className="pt-30 w-full flex-col-reverse">
                                            <h1 className="font-dmserif text-3xl font-bold text-black mb-2 mt-0 pt-0  ">{val.name}</h1>
                                            <p className=" font-dmserif text-xl  text-[#401d6e] font-bold mb-24">{val.data}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

export default PastSpeakers;