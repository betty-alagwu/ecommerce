import React from "react";

export function FooterSocials() {
    return (
        <div className=" lg:hidden ">
            <p className="font-raleway font-medium text-base text-white pt-4 px-6">SOCIAL</p>
            
            <div className="space-x-12 mt-6 px-6">
                <button className="rounded-full bg-white">
                    <img src="app/components/images/facebook-icon.png" alt="facebook icon" className="w-[8px] h-[12px] my-3 mx-3.5" />
                </button>
                <button className="rounded-full bg-white">
                    <img src="app/components/images/pinterest-icon.png" alt="facebook icon" className="w-[8px] h-[12px] my-3 mx-3.5" />
                </button>
                <button className="rounded-full bg-white">
                    <img src="app/components/images/google-icon.png" alt="facebook icon" className="w-[8px] h-[12px] my-3 mx-3.5" />
                </button>
                <button className=" rounded-full bg-white">
                    <img src="app/components/images/twitter-icon.png" alt="facebook icon" className="w-[8px] h-[12px] my-3 mx-3.5" />
                </button>
                <button className=" rounded-full bg-white">
                    <img src="app/components/images/youtube-icon.png" alt="facebook icon" className="w-[8px] h-[12px] my-3 mx-3.5" />
                </button>
            </div>
            <form action="form" className=" flex items-center w-full px-2">
                <input type="email" className="focus:outline-none placeholder:text-base placeholder:font-raleway pl-2 pr-16  py-1 mt-8 text-blackSecColor" placeholder="Type your email address " />
                <button className="font-raleway text-xs font-semibold mt-8 bg-primaryGreen px-9 py-2 text-white ">
                    SUBSCRIBE
                </button>
            </form>
            <div className="flex justify-center items-center py-9">
                <img src="/app/components/images/Storefron UI Logo.png " width="37px" alt="image of a shoping Bag" className="" />
            </div>
        </div>
    )
}