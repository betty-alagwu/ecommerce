import React from 'react'

export function Category() {
    return (
        <button className="lg:ml-4 h-[147px] w-[198px] lg:w-[295px] lg:h-[222px] bg-cover relative" style={
            {
            backgroundImage: "url('app/components/images/popular-category.png')",
            }
        }>
            <div className="w-full bg-primaryGreen font-raleway font-medium text-white text-base flex justify-between px-2 py-1.5 inset-x-0 bottom-0 absolute">
                <p className="">Personal Care</p>
                <span>(32)</span>
            </div>
        </button>
    )
}
