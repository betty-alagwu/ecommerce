import React from 'react'

export function SearchBox() {
    return <div className="w-full  ">
        <div className="border-b-2 border-blackSecColor mx-7 lg:mx-0 mt-2.5 flex items-center justify-between max-w-sm">
        <input type="search" className="font-raleway pt-2.5 pb-1 w-full focus:outline-none placeholder:text-blackSecColor" placeholder='Search for items and promotions' />
        <button>
            <img src="app/components/images/search.png" alt="" className="" width="20px" />
        </button>
        </div>

        <div className=" mt-3 flex justify-between lg:hidden ">
            <button className=" px-8 font-raleway text-blackSecColor text-base  border-b-2 border-transparent hover:border-b-primaryGreen" >
                WOMEN
            </button>
            <button className="px-8 border-transparent border-b-2 hover:border-b-primaryGreen font-raleway text-blackSecColor text-base" >
                MAN
            </button>
            <button className="px-8 border-transparent border-b-2 hover:border-b-primaryGreen font-raleway text-blackSecColor text-base" >
                KIDS
            </button>
        </div>
    </div>
    
}
