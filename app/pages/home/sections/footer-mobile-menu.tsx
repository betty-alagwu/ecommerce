import React from "react";

export function FooterMobileMenu() {
    return (
        <fieldset className="w-full lg:hidden ">
            <div className="flex items-center px-6">
                <select name="about" id="about" className="w-full appearance-none  bg-light-grey font-medium font-raleway text-blackSecColor text-base py-5">
                    <option value="about">ABOUT US</option>
                </select>
                {/* Heroicon name: chevron-down*/}
                <div className=" ">
                    <img src="app/components/images/chevron-Down.png" alt="chevron-arrow-down icon" className="w-[32px]"/>
                </div>
            </div>
            <div className="flex items-center px-6">
                <select name="about" id="about" className="w-full appearance-none  bg-light-grey font-medium font-raleway text-blackSecColor text-base py-5">
                    <option value="about">DEPARTMENTS</option>
                </select>
                {/* Heroicon name: chevron-down*/}
                <div className=" ">
                    <img src="app/components/images/chevron-Down.png" alt="chevron-arrow-down icon" className="w-[32px]"/>
                </div>
            </div>
            <div className="flex items-center px-6">
                <select name="about" id="about" className="w-full appearance-none  bg-light-grey font-medium font-raleway text-blackSecColor text-base py-5">
                    <option value="about">HELP</option>
                </select>
                {/* Heroicon name: chevron-down*/}
                <div className=" ">
                    <img src="app/components/images/chevron-Down.png" alt="chevron-arrow-down icon" className="w-[32px]"/>
                </div>
            </div>
            <div className="flex items-center px-6">
                <select name="about" id="about" className="w-full appearance-none  bg-light-grey font-medium font-raleway text-blackSecColor text-base py-5">
                    <option value="about">PAYMENTS & DELIVERY</option>
                </select>
                {/* Heroicon name: chevron-down*/}
                <div className=" ">
                    <img src="app/components/images/chevron-Down.png" alt="chevron-arrow-down icon" className="w-[32px]"/>
                </div>
            </div>
        </fieldset>
    )
}