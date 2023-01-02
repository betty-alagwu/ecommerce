import { Dialog } from "@reach/dialog";
import React,{useState} from "react";
import { Rating } from "../home/components/rating";
import { ProductColor } from "../home/product-listings/productColor";


interface ProductProps {
  description: string;
  image: string;
  price: number;
  discountPrice?: number;
  className?: string;
}

export function Product({
    description,
    price,
    image,
    discountPrice,
}: ProductProps) {
    const [wishlist, setWishlist] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    
    const heartIcon = wishlist ? "app/components/images/Favourites Icon.png" : "app/components/images/love.png";

    const handleFavourite = () => {
        setWishlist(prevState => {
            return !prevState;
        });
    };

    return (
        <div className="lg:inline">
            {" "}
            
            <div className=" lg:mt-10 mt-3 transition ease-in-out  lg:hover:scale-105 hover:scale-100 hover:-translate-y-1.5 duration-300  lg:hover:drop-shadow-lg hover:drop-shadow-md h-full" onClick={() => window.innerWidth < 768 ? close() : open()}>
                <div className="lg:w-[216px] lg:h-[326px] bg-cover  w-[125px] h-[171px] ">
                    <div className="relative">
                        <img src={image} className="absolute" />
                        <button
                            onClick={handleFavourite}
                            type="button"
                            className="lg:ml-44 lg:mt-4 ml-24 mt-2 w-[25px] h-[20px] absolute">
                            <img
                            src={heartIcon}/>
                        </button>
                    </div>
                </div>
                <ProductColor />
                <p className="text-blackSecColor font-raleway lg:text-base lg:pt-4 pt-6 text-sm">
                    {description}
                </p>
                <span className="font-raleway font-medium text-xs text-primaryRed line-through pr-2">
                    {discountPrice}
                </span>
                <span className="text-blackPrimary font-raleway font-medium text-lg pt-2">
                    ${price}
                </span>
                <Rating />
            </div>
        {/* <button onClick={open}>Show Dialog</button> */}
            <Dialog style={{
                padding: 0,
                width: '366px',
            }} isOpen={showDialog} onDismiss={close} >
            {" "}
            <div className="">
                <div className="flex  pt-4">
                    <p className="pl-32 text-base font-medium text-blackSecColor font-raleway">Select the size</p>
                    <button className="font-raleway pl-24 text-base font-medium text-sec-grey" onClick={() => close()}>X</button>
                </div>
                <div className="flex justify-center mt-7 ">
                    <div className="" onClick={() => open()}>
                        <div className="lg:w-[216px] lg:h-[326px] bg-cover  w-[125px] h-[171px] ">
                            <div className="relative">
                            <img src={image} className="absolute" />
                            <button
                                type="button"
                                className="lg:ml-44 lg:mt-4 ml-24 mt-2 w-[22px] h-[19px] absolute"
                            >
                                <img
                                src="app/components/images/Favourites Icon.png"
                                alt="image of a favourie icon"
                                />
                            </button>
                            </div>
                        </div>
                        <ProductColor />
                        <p className="text-blackSecColor font-raleway lg:text-base lg:pt-4 pt-6 text-sm">
                            {description}
                        </p>
                        <span className="font-raleway font-medium text-xs text-primaryRed line-through pr-2">
                            {discountPrice}
                        </span>
                        <span className="text-blackPrimary font-raleway font-medium text-lg pt-2">
                            ${price}
                        </span>
                        <Rating />
                    </div>
                </div>
                <div className="mx-9 mt-6 ">
                    <select name="size" id="" className=" focus:outline-none border-b w-[300px] border-blackSecColor font-raleway text-blackSecColor text-base">
                        <option value="Sizes">Sizes</option>
                        <option value="Size 8-10 (S)">Size 8-10 (S) </option>
                        <option value="Size 12-14 (M)">Size 12-14 (M)</option>
                        <option value="Size 16-18 (L)">Size 16-18 (L)</option>
                        <option value="Size 20-22 (XL)">Size 20-22 (XL)</option>
                        <option value="Size 24-26 (XXL)">Size 24-26 (XXL)</option>
                    </select>
                    <div className="text-center">
                        <button className="py-4  text-white font-raleway text-base bg-primaryGreen mt-10 w-full">
                        ADD TO CART
                        </button>
                    </div>
                    <div className="text-center py-4">
                        <a href="#" className="underline text-base font-raleway text-blackSecColor ">Size guide</a>
                    </div>
                    
                </div>
            </div>
        </Dialog>{""}
        </div>
    );
}




