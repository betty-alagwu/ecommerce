import React from "react";

export function DownloadBanner() {
    return (
        <div className="hidden lg:inline w-full">
            <div className="flex items-center " >
                <div className="pt-14 pl-24 pb-">
                    <span className="font-raleway text-sm text-blackSecColor ">FASHION TO TAKE AWAY</span>
                    <h1 className="font-raleway font-medium text-4xl pt-4">Download our application to your mobile</h1>
                    <div className="mt-10 space-x-5">
                        <button className=" w-[160px]">
                            <img src="app/components/images/app-store.png" alt="app-store downloap" />
                        </button>
                        <button className="w-[160px]">
                            <img src="app/components/images/googleplay.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="w-[1000px] mr-14">
                    <img src="app/components/images/iPhone-X-PSD-Mockup-01.png" alt="" />
                </div>
            </div>
        </div>
    )
}