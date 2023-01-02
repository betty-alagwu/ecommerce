import React from "react";

export function InstagramFeed() {
    return (
        <div className=" w-full">
            <div className="lg:hidden inline">
                <div className=" grid grid-cols-2 pr-9 pl-14 gap-y-1">
                    <img src="app/components/images/Instagram-Feed 1.png" alt="instagram-image" className="w-[162px]" />
                    <img src="app/components/images/Instagram-Feed2.png" alt="instagram-image" className="w-[162px]"/>
                    <img src="app/components/images/Instagram-feed3.png" alt="instagram-image" className="w-[162px]"/>
                    <img src="app/components/images/Instagram-Feed4.png" alt="" className="w-[162px]"/>
                </div>
            </div>
            <div className="hidden lg:inline w-[960px] h-[650px] bg-cover">
                <img src="app/components/images/Instagram-Feed5.png" alt="instagram-image" />
            </div>
        </div>
    )
}