import React from 'react'

export function Carousel() {
    return (
        <div className="lg:mx-0 mt-12 mx-4 h-56 lg:w-[1240px] lg:h-[586px] lg:ml-28  bg-cover" style={
            {
                backgroundImage: "url('app/components/images/Photo1.png')",
            }
        }>
            <div className="  lg:ml-24 lg:py-44 px-4 lg:px-0 pt-6  ">
                <span className='lg:w-[213px] w-[168px] text-base text-primarygrey font-raleway '>
                SUMMER COLLECTION 2019
                </span>
                <p className="font-raleway font-semibold text-2xl lg:text-4xl text-blackPrimary pt-2 lg:pt-5 lg:w-[521px] w-44">Colorful summer dresses are already in store</p>
                <button className="hidden lg:inline font-raleway text-xs font-semibold  bg-primaryGreen px-7 py-4 text-white lg:mt-9">
                    LEARN MORE
                </button>
            </div>
            <div className="flex space-x-2 justify-center  lg:-mt-10">
                <button className="hidden lg:inline border w-2.5 h-2.5 bg-primaryGreen rounded-full drop-shadow-lg"></button>
                <button className="hidden lg:inline border w-2.5 h-2.5 rounded-full bg-primarygrey"></button>
                <button className=" hidden lg:inline border w-2.5 h-2.5 rounded-full bg-primarygrey"></button>
            </div>
        </div>
    )
}
