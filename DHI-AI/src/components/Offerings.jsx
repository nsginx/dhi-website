import React from "react";
import img1 from "../assets/offerrings-1.jpg"
import img2 from "../assets/offerings-2.jpg"
import img3 from "../assets/offerings-3.jpg"
import "../CSS/Offerings.css"
const Offerings=()=>{
    return(
        <div className="bg-gray-500 h-full">
            <div className="text-4xl text-white py-5 ml-[5vw]">
                Our Offerings

            </div>
            <p className="text-lg text-white ml-[5vw] mb-8">
            We provide expert advisory services, application development, managed services and analytics as a service.
            </p>
            < div className="flex flex-col md:flex-row w-[90vw] mx-auto my-20 gap-8 ">
            
                    
                
                <div className="flip-card h-[300px] lg:w-[400px] w-[90vw] bg-transparent">
                <div className="flipcard-inner">
                    <div className="flipcard-front bg-indigo-700 rounded-lg">
                            <img src={img1} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                                Business Support Services
                            </p>

                    </div>
                    <div className="flipcard-back bg-indigo-700 rounded-lg py-auto">
                        <div className="text-lg text-white text-center py-24  px-4">
                        {/* <p className="my-8 h-[100px]"> */}
                        We help our clients to identify business requirements, creation of RFPs, technical evaluation of solutions & bids, business case creation, and managing PMO for our client's projects.

                        {/* </p>  */}

                        </div>

                    </div>

                </div>

                </div>
                    
                
                <div className="flex flex-col w-[90vw] gap-6 my-auto">
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4  ml-auto  rounded-lg">
                        <p className="text-xl text-white text-center  py-6">
                            Oracle

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4 mr-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            SAP

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            Salesforce

                        </p>

                    </div>

                </div>

            </div>
            < div className="flex flex-col md:flex-row w-[90vw] mx-auto my-20 gap-8 ">
            <div className="flip-card h-[300px] lg:w-[400px] w-[90vw] bg-transparent rounded-lg">
                <div className="flipcard-inner">
                    <div className="flipcard-front bg-indigo-700">
                            <img src={img2} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                                Digital Transformations
                            </p>

                    </div>
                    <div className="flipcard-back bg-indigo-700 ">
                        <p className="text-lg text-white text-center my-auto mx-auto">
                        We design & build customized digital applications and also leverage our ready-to-use “accelerators” across IIoT, Vision Analytics, AI/ML, AR/VR, and Track & Trace domains

                        </p>

                    </div>

                </div>

                </div>
            
                    
                
                    
                
                <div className="flex flex-col w-[90vw] gap-6 my-auto">
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4  mr-auto  rounded-lg">
                        <p className="text-xl text-white text-center  py-6">
                            Weather

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            Envizi/ESG

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4 mr-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            Maximo-MAS

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            IOT

                        </p>

                    </div>

                </div>

            </div>
            < div className="flex flex-col md:flex-row w-[90vw] mx-auto my-20 gap-8 ">
            <div className="flip-card h-[300px] lg:w-[400px] w-[90vw] bg-transparent rounded-lg">
                <div className="flipcard-inner">
                    <div className="flipcard-front bg-indigo-700">
                            <img src={img3} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                                Innovation with AI
                            </p>

                    </div>
                    <div className="flipcard-back bg-indigo-700 ">
                        <p className="text-lg text-white text-center my-auto mx-auto">
                        We provide systems integration services for IT/OT applications, managed services, staff augmentation, and IT/OT infrastructure set-up for both cloud and on-premises.

                        </p>

                    </div>

                </div>

                </div>
            
                    
                
                    
                
                <div className="flex flex-col w-[90vw] gap-6 my-auto">
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4  mr-auto  rounded-lg">
                        <p className="text-xl text-white text-center  py-6">
                            Gen AI

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            AI Chat Bot

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4 mr-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            AI Automations

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            AI Vision

                        </p>

                    </div>

                </div>

            </div>


        </div>
    )
}
export default Offerings;