import React from "react";

export function Footer() {
    return (
        <footer className="w-full hidden lg:inline  ">
            <div className="flex justify-center space-x-32">
                <div>
                    <p className=" font-raleway text-base text-white">ABOUT US</p>
                    <div className="font-raleway text-base text-white pt-4 space-y-2">
                        <p>Who we are</p>
                        <p>Quality in the details</p>
                        <p>Customer Reviews</p>
                    </div>
                </div>
                <div>
                    <p className=" font-raleway text-base text-white">DEPARTMENTS</p>
                    <div className="font-raleway text-base text-white pt-4 space-y-2">
                        <p>Women fashion</p>
                        <p>Men fashion</p>
                        <p>Kidswear</p>
                        <p>Home</p>
                    </div>
                </div>
                <div>
                    <p className=" font-raleway text-base text-white">HELP</p>
                    <div className="font-raleway text-base text-white pt-4 space-y-2">
                        <p>Customer service</p>
                        <p>Size guide</p>
                        <p>Contact us</p>
                    </div>
                </div>
                <div>
                    <p className=" font-raleway text-base text-white">PAYMENTS & DELIVERY</p>
                    <div className="font-raleway text-base text-white pt-4 space-y-2">
                        <p>Purchase terms</p>
                        <p>Guarantee</p>
                    </div>
                </div>
            </div>
            <div className=" flex  justify-between items-center ">
                <div className="mt-16 mr-5">
                    <p className="font-raleway font-medium text-base text-white  px-4">SOCIAL</p>
                    <div className="space-x-1 mt-4 px-4">
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
                </div>
                <div className="mr-48 mt-12">
                    <p className=" font-raleway text-base text-white">LANGUAGE</p>
                    <div className="flex items-center space-x-1 pt-4">
                        <img src="./app/components/images/flag-icon.png" width="32px" alt="image of a flag icon" />
                        <p className="font-raleway font-medium text-base text-white">English</p>
                    </div>
                </div>
                <div className="mt-16">
                    <form action="form" className=" flex items-center w-full ">
                        <input type="email" className="focus:outline-none placeholder:text-base placeholder:font-raleway pl-2 w-[242px] max-w-lg py-1 mt-8 text-blackSecColor" placeholder="Type your email address " />
                        <button className="font-raleway text-xs font-semibold mt-8 bg-primaryGreen px-9 py-2 text-white ">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    )
}