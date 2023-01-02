import React from 'react'



export function BannerShoe() {
    return (
        <div className="mx-4 lg:mx-0 mt-4 h-[310px] bg-cover lg:mt-10 pt-12 px-12 bg-center" style={
            {
                backgroundImage:  "url('app/components/images/shoebanner.png')",
            }
        }>
            <span className="text-base font-raleway text-blackSecColor ">SHOES</span>
            <p className=" text-blackPrimary font-raleway text-4xl pt-4">ECO SANDALS</p>
        </div>
        
    )
}