import React from 'react'
import { Category } from '../components/category'
import { Banner } from '../components/banner-cta'
import { BannerSquare } from '../components/banner-square'
import { BannerShoe } from '../components/banner-shoe'


export function PopularCategories() {
    return (
        <div className=" ">
            <p className="font-raleway lg:mt-20 my-8 lg:text-center lg:font-semibold font-bold lg:text-2xl text-lg text-blackPrimary px-4 lg:px-0">Popular categories</p>
            
            <div className="w-full overflow-auto ">
                <div className="flex space-x-4 lg:grid lg:grid-cols-4 overflow-x-auto w-[900px] sm:w-full">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
            </div>

            <div className="mt-10 lg:mt-20   lg:flex lg:space-x-10">
                <Banner className='w-[330px] h-[660px]'/>
                <Banner className="w-[500px] h-[660px] bg-center " />
                <div className="">
                    <BannerSquare />
                    <BannerShoe/>
                </div>
            </div>
        </div>
    )
}
