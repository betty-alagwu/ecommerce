import React from 'react'
import { Product } from '../../products/product'

export function MatchItWith() {
    return (
        <div className="w-full ">
            <div className="lg:justify-center lg:mt-20 mt-10 flex justify-between items-center	">
                <h1 className="font-raleway text-lg font-bold lg:font-medium lg:text-2xl text-blackPrimary">
                    Match it with
                </h1>
                <a href="#" className="lg:hidden underline font-raleway text-sm text-blackPrimary font-medium ">see all</a>
            </div>
            <div className="lg:hidden w-full border-b border-light-grey mt-2"></div>

            <div className="flex items-center">
                <button className="w-[70px] h-[40px] hidden lg:inline pr-2">
                    <img src="app/components/images/arrow-left.png" alt=""/>
                </button>

                <div className="w-full  overflow-auto">
                    <div className="flex items-center space-x-5 overflow-x-auto w-full h-full sm:w-full">
                        
                        <Product
                            image='app/components/images/Product Picture.png'
                            description='Vila stripe shirt dress'
                            price={50.99}
                        />
                        <Product
                            image='app/components/images/Product Picture2.png'
                            description='Vila stripe shirt dress'
                            price={89.99}
                        />
                        <Product
                            image='app/components/images/Product Picture3.png'
                            description='Vila stripe shirt dress'
                            price={60.99}
                        />
                        <Product
                            image='app/components/images/Product Picture4.png'
                            description='Vila stripe shirt dress'
                            price={100.99}
                        />
                        <Product
                            image='app/components/images/Product Picture.png'
                            description='Vila stripe shirt dress'
                            price={120.99}
                        />
                        <Product
                            image='app/components/images/Product Picture2.png'
                            description='Vila stripe shirt dress'
                            price={39.99}
                        />
                    </div>
                </div>
                
                <button className="hidden lg:inline w-[70px] h-[40px] pl-2">
                    <img src="app/components/images/arrow-right.png" alt=""/>
                </button>
            </div>
        </div>
    )
}
