import React from 'react'

import { SearchBox } from './searchbox'

export function Navbar() {
    return (
        <div className="w-full border-b shadow-md lg:shadow-none lg:border-none  lg:px-24 lg:py-4 lg:flex lg:items-center lg:border justify-between">
            <div className="hidden lg:inline lg:space-x-16">
                <img src="./app/components/images/Storefron UI Logo.png" alt="image of a shopping bag" width="46px" className="hidden lg:inline" />
                <button type='button' className="hidden lg:inline font-raleway text-blackSecColor text-base " >
                    WOMEN
                </button>
                <button type='button' className="hidden lg:inline font-raleway text-blackSecColor text-base " >
                    MEN
                </button>
                <button type='button' className="hidden lg:inline font-raleway text-blackSecColor text-base" >
                    KIDS
                </button>
            </div>

            <div className="lg:pb-2 lg:flex lg:items-center space-x-11">
                <div className='lg:w-80'>
                    <SearchBox />
                </div>

                <button type='button' className="hidden lg:inline">
                    <img src="app/components/images/acc-icon.png" alt="image of a account icon" width="19px" height="32px" />
                </button>

                <button type='button' className="hidden lg:inline">
                    <img src="app/components/images/Favourites Icon.png" alt="image of a favourie icon" width="32px" height="19px" />
                </button>

                <button type='button' className="hidden lg:inline" >
                    <img src="app/components/images/cart.png" alt="image of a shopping cart" width="22px" height="20px"/>
                </button>
            </div>
        </div>
    )
}
