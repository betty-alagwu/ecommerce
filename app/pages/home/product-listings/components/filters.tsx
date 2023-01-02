import React from "react";
import { Dialog } from "@reach/dialog";
import { ProductColor } from "../productColor";


export function Filters() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <div className="hidden lg:inline" >
      {" "}
      <button
        className="pr-20 flex items-center space-x-2"
        onClick={() => open()}
      >
        <img
          src="app/components/images/filter.png"
          alt=""
          className="w-[14px]"
        />
        <p className="font-raleway text-base text-blackSecColor">Filters</p>
      </button>
      <Dialog style={{
        margin: 0,
        width: "366px",
      }} isOpen={showDialog} onDismiss={close}>
        {" "}
        <button
          className="bg-primaryGreen text-white rounded-full h-10 w-10 absolute left-[346px] flex items-center justify-center"
          onClick={() => close()}
        >
          X
        </button>
        <div className="">
          <div className="  ">
            <p className=" font-raleway text-base">Collection</p>
            <div className="pt-8 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackPrimary">Summer Fly</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">10</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Body</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">23</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Mordern Style</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <p className=" font-raleway text-base pt-8">Color</p>
            <div className="flex space-x-3 mt-8 mb-4">
              <ProductColor />
              <ProductColor />
              <ProductColor/>
            </div>
            <a href="#" className="underline font-raleway text-primaryBlue ">See all colors</a>
            <p className=" font-raleway text-base pt-8">Size</p>
            <div className="pt-8 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 2 (XXS)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">10</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 4-6 (XS)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">23</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 8-10 (S)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 12-14 (M)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">10</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 16-18 (L)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">23</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 20-22 (XL)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Size 24-26 (XXL)</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <p className=" font-raleway text-base pt-8">Price</p>
            <input type="range" className="mt-8" />
            <p className=" font-raleway text-base pt-8">Material</p>
            <div className="pt-8 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Cotton</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">10</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Wool</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">23</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Silk</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Wool</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Mixed</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Cotton</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
            <div className="pt-4 flex justify-between items-center">
              <div className=" space-x-2">
                <input type="checkbox" name="summerFly"/>
                <label htmlFor="summerFly" className="font-roboto text-base text-blackSecColor">Mixed</label><br/>
              </div>
              <span className="font-raleway text-base text-primarygrey">54</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="py-4 mr-5 text-white font-raleway text-base bg-primaryGreen mt-16 w-full">
            Done
          </button>
        </div>
        <div className="text-center">
          <button className="py-4 mr-5 bg-light-grey mt-4 w-full text-primarygrey text-base font-raleway">
              CLEAR ALL
          </button>
        </div>
      </Dialog>{" "}
    </div>
  );
}
