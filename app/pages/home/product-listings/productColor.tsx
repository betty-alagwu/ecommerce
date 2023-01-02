import React from "react";

export function ProductColor() {
    return (
        <div className="hidden lg:inline ">
            <div className="mt-2.5 flex items-center space-x-2.5">
                <button className=" w-3 h-3 bg-nude-dress-color transition ease-in-out delay-75 hover:scale-110 duration-300 hover:-translate-y-1 hover:drop-shadow-md "></button>
                <button className="w-3 h-3  hover:drop-shadow-md bg-blue-dress-color transition ease-in-out delay-75 hover:scale-110 duration-300 hover:-translate-y-1"></button>
                <button className="w-3 h-3 bg-wine-dress-color  hover:drop-shadow-md transition ease-in-out delay-75 hover:scale-110 duration-300 hover:-translate-y-1"></button>
            </div>
        </div>
    )
}