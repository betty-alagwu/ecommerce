import React from 'react'

export function Topbar() {
    return <div className="w-full border-none py-2 px-4 bg-light-grey lg:px-24">
        <div className=" flex justify-between items-center">
            <span className='text-primaryBlue font-raleway'>Help & FAQs</span>
            <div>
                <img src="/app/components/images/Storefron UI Logo.png " width="24px" alt="image of a shoping Bag" className="lg:hidden" />
                <a href="#" className="hidden lg:inline mr-4 text-blackSecColor font-raleway">Download our application.</a>
                <a href="#" className="hidden lg:inline text-blackPrimary text-base font-raleway font-medium">Find out more</a>
            </div>
            <div className="flex">
                <span className="border px-2 my-1 rounded-full bg-white mr-4">$</span>
                <img src="./app/components/images/flag-icon.png" width="32px" alt="image of a flag icon" />
            </div>
        </div>
    </div>
}
