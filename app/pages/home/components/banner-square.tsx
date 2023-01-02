import React from 'react'

export function BannerSquare() {
    return (
        <div className="lg:w-[343px] h-[310px] mx-4 bg-cover lg:mx-0  " style={
            {
                backgroundImage: "url('app/components/images/banner-square.png')",
            }
        }>
            <div className="flex justify-between items-center ">
            <span className=" text-blackSecColor font-raleway text-base pl-12 pt-12">T-SHIRTS</span>
            <button type='button' className="lg:hidden border px-4 py-4 rounded-full border-transparent bg-primaryGreen mt-4 relative ">
                <img src="app/components/images/white-cart.png" alt="image of a shopping cart" width="22px" height="20px" />
            </button>
            </div>
            <p className=" text-blackPrimary font-raleway text-4xl pt-2 px-12">THE OFFICE LIFE</p>
        </div>
    )
}