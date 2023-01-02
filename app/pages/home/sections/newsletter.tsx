import React from "react";

export function Newsletter() {
    return (
        <div className=" lg:w-[1240px] lg:h-[202px] lg:mt-16 mt-10 bg-cover bg-center overflow-hidden" style={{
            backgroundImage: "url('app/components/images/newsletter.png')",
        }}>
            <div className="lg:flex lg:items-center justify-center ">
                <div className="pt-7 px-8 lg:pt-14 lg:px-24">
                    <p className="text-white font-raleway font-medium text-2xl lg:text-4xl w-[271px] lg:w-[546px]"> Subscribe to Newsletters</p>
                    <p className="font-roboto text-white pt-3 lg:text-lg text-sm min-w-fit">Be aware of upcoming sales and events. Receive gifts and special offers!</p>
                </div>
                <div className="font-raleway text-base font-medium  bg-primaryGreen px-10 py-3 text-white lg:mx-24 mx-8 mt-5 lg:mt-14 mb-6 text-center ">
                    <button >
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
    )
}
