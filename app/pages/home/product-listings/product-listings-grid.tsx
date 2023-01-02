import React, {useState} from 'react'
import { Carousel } from '../../../components/carousel'
import { Navbar } from '../../../components/navbar/navbar'
import { Topbar } from '../../../components/topbar'
import { DownloadBanner } from '../sections/download-banner'
import { Footer } from '../sections/footer'
import { FooterMobileMenu } from '../sections/footer-mobile-menu'
import { FooterSocials } from '../sections/footer-socials'
import { Product } from '../../products/product'
import { Filters } from './components/filters'



export function ProductListings() {
    const [open, setOpen] = useState(true)
    const [gridView, setGridView] = useState(true);




    return (
        <div className="w-full">
            <div className="hidden lg:inline">
                <Topbar />
                <Navbar />
            </div>
            <div className="lg:hidden bg-light-grey pb-3.5 flex items-center ">
                <button>
                    <img src="app/components/images/chevron-arrow-left.png" alt="" className='w-[7px] mr-20 ml-7 mt-4' />
                </button>
                <p className='text-center pl-14 pt-4 font-medium text-base font-raleway text-blackSecColor'>All Clothing</p>
            </div>

            <div className="lg:hidden flex items-center justify-between ">
                <div className=" flex mt-5 mb-4 ml-7 ">
                    <button className="mr-5" >
                        <img src="app/components/images/grid-bar.png" alt="grid-icon" className='w-[10px]'/>
                    </button>
                    <button className="" >
                        <img src="app/components/images/layout-bar.png" alt="" className="w-[11px]"/>
                    </button>
                </div>
                <span className='font-raleway text-base text-primarygrey'>276 Items</span>
                <div className="flex items-center space-x-3">
                    <p className='font-raleway text-base font-medium text-blackSecColor'>Filters</p>
                    <Filters />
                    <button>
                        <img src="app/components/images/filter.png" alt="" className='w-[14px] mr-5' />
                    </button>
                </div>
            </div>

            <div className="lg:px-24 lg:pt-7">
                <a href="#" className="font-raleway text-sm text-primarygrey hidden lg:inline">Home &nbsp; &nbsp; | &nbsp; &nbsp;<span className="text-blackSecColor">Women</span></a>
                <hr className="lg:mt-6 mt-2"></hr>
                <div className="lg:flex overflow-visible">
                    <div className="pt-6 hidden lg:inline pr-6 sticky top-0 h-screen">
                        <p className="font-raleway text-2xl font-medium text-blackSecColor pl-2">Categories</p>
                        {/* CLOTHING CATEGORIES */}
                        <div>
                            <div className="flex items-center space-x-32">
                                <button onClick={() => {setOpen(!open)}}>
                                    <p className="font-bold font-raleway text-xl text-blackSecColor hover:text-primaryGreen pl-3 pt-16">Clothing</p>
                                </button>
                                <button className='pt-16 '>
                                    <img src="app/components/images/chevron-up.png " alt="" className='w-[24px]'/>
                                </button>
                            </div>
                            <div className={`dropdown-menu pl-3 pt-10 flex justify-between ${open? 'active' : 'inactive'}`} >
                                <div className=" font-raleway text-base text-blackSecColor space-y-3">
                                    <span  className='underline '>All</span>
                                    <p>Skirts</p>
                                    <p>Sweaters</p>
                                    <p>Dresses</p>
                                    <p>T-shirts</p>
                                    <p>Pants</p>
                                    <p>Underwears</p>
                                    <p>Jackets</p>
                                    <p>Blouses</p>
                                </div>
                                <div className="font-raleway text-base text-blackSecColor space-y-3 text-right">
                                <span  className='underline '>280</span>
                                    <p>23</p>
                                    <p>53</p>
                                    <p>23</p>
                                    <p>24</p>
                                    <p>12</p>
                                    <p>45</p>
                                    <p>23</p>
                                    <p>56</p>
                                </div>
                            </div>
                        </div>
                        {/* ACCESSORIES CATEGORIES */}
                        <div>
                            <div className="flex items-center justify-between pt-8">
                                <button>
                                        <p className="font-bold font-raleway text-xl text-blackSecColor pl-3 hover:text-primaryGreen">Accessories</p>
                                </button>
                                <button className=' w-[24px]'>
                                        <img src="app/components/images/chevron-Down.png " alt="" className='w h-[24px]'/>
                                </button>
                            </div>
                        </div>
                        {/* SHOE CATEGORIES */}
                        <div>
                            <div className="flex items-center justify-between pt-6">
                                <button >
                                        <p className="font-bold font-raleway text-xl text-blackSecColor hover:text-primaryGreen pl-3">SHOES</p>
                                </button>
                                <button className='w-[24px]'>
                                    <img src="app/components/images/chevron-Down.png " alt="" className='w h-[24px]'/>
                                </button>
                            </div>
                        </div>
                        {/* OTHER CATEGORIES */}
                        <div>
                            <div className="flex items-center justify-between pt-6">
                                <button >
                                    <p className="font-bold font-raleway text-xl text-blackSecColor hover:text-primaryGreen pl-3">OTHERS</p>
                                </button>
                                <button className='w-[24px]'>
                                    <img src="app/components/images/chevron-Down.png " alt="" className='w h-[24px]'/>
                                </button>
                            </div>
                        </div>
                    </div>
                
                    <div className="mt-6 lg:mt-0 border-l ">
                        <div className="hidden lg:inline ">
                            <div className="px-10 py-7 flex justify-between  border-b">
                                <div className=" lg:flex ">
                                    <Filters />
                                    <div className="flex">
                                        <label htmlFor='label' className="text-base font-raleway text-blackSecColor">sort by:</label>
                                        <select name="select" id="" className='focus:outline-none cursor-pointer text-base font-bold  font-raleway text-blackSecColor'>
                                            <option value="1">Price from low to high &nbsp; </option>
                                            <option value="1">Price from high to low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex ">
                                    <label htmlFor="label" className='font-raleway text-base text-blackSecColor'>Products found:&nbsp;</label>
                                    <p className='pr-20 text-base font-bold  font-raleway text-blackSecColor'>267</p>
                                    <div className="">
                                        <label htmlFor='label' className='font-raleway text-base text-blackSecColor'>view:&nbsp; &nbsp;</label>
                                        <button className="mr-5 "  >
                                            <img src="app/components/images/grid-bar.png" alt="" className='w-[10px]'/>
                                        </button>
                                        <button className="" >
                                            <img src="app/components/images/layout-bar.png" alt="" className="w-[11px]"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            {/* Grid view */}
                            <div className="w-full px-4 lg:pl-5 ">
                                <div className="lg:grid lg:grid-cols-4  lg:space-x-5 overflow-x-auto w-full h-full sm:w-full grid grid-cols-3 ">
                                    
                                    <Product 
                                        image='app/components/images/Product Picture.png'
                                        description='Vila stripe shirt dress'
                                        discountPrice={50.99}
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
                                    <Product
                                        image='app/components/images/Product Picture4.png'
                                        description='Vila stripe shirt dress'
                                        price={100.99}
                                    />
                                    <Product
                                        image='app/components/images/Product Picture3.png'
                                        description='Vila stripe shirt dress'
                                        price={60.99}
                                    />
                                    <Product 
                                        
                                        image='app/components/images/Product Picture.png'
                                        description='Vila stripe shirt dress'
                                        price={50.99}
                                    />
                                    <Product
                                        image='app/components/images/Product Picture3.png'
                                        description='Vila stripe shirt dress'
                                        price={60.99}
                                    />
                                    <Product
                                        image='app/components/images/Product Picture2.png'
                                        description='Vila stripe shirt dress'
                                        price={39.99}
                                    />
                                    <Product
                                        image='app/components/images/Product Picture4.png'
                                        description='Vila stripe shirt dress'
                                        price={100.99}
                                    />
                                </div>
                            </div>

                            <div className=" lg:flex lg:items-center lg:justify-between lg:mt-12 lg:mb-10 lg:pl-10" >
                                <div className="flex items-center justify-center  my-6 lg:my-0">
                                    <button className="w-[32px] h-[32px]  pr-2 ">
                                        <img src="app/components/images/short-arrow.png" alt=""/>
                                    </button>
                                    <div className=" space-x-5 font-medium font-raleway text-lg ">
                                        <span className='text-blackSecColor'>1</span>
                                        <span className='text-sec-grey'>2</span>
                                        <span className='text-sec-grey'>3</span>
                                        <span className='text-sec-grey'>4</span>
                                    </div>
                                    <button className="w-[32px] h-[32px] pl-2 ">
                                        <img src="app/components/images/arrow-Right.png" alt=""/>
                                    </button>
                                </div>
                                <div className="hidden lg:inline ">
                                    <div className="flex items-center text-blackPrimary font-raleway space-x-2 ">
                                        <label htmlFor="label">Show on page:</label>
                                        <select name="select"  className='appearance-none focus:outline-none cursor-pointer'>
                                            <option value="1" className="bg-light-grey">10 items</option>
                                            <option value="2" className="bg-light-grey">20 items</option>
                                            <option value="3" className="bg-light-grey">50 items</option>
                                            <option value="4" className="bg-light-grey ">75 items</option>
                                        </select>
                                        <button className='w-[24px]'>
                                            <img src="app/components/images/chevron-up.png " alt=""/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List view */}
                        
                    </div>
                </div>
            </div>

                <div className="bg-light-grey text-blackSecColor">
                    <FooterMobileMenu/>
                </div>
                <div className="bg-blackPrimary ">
                    <FooterSocials />
                </div>
                <div className="bg-blackPrimary border-t-2 border-t-primaryGreen mt-20 lg:pb-24 px-56 pt-24 hidden lg:block">
                    <Footer/>
                </div>
        </div>
    )
}


