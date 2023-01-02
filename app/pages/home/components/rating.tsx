import React from "react";

export function Rating() {
    return (
        <div className="flex items-center pt-3">
            <div className="flex items-center space-x-1 ">
                <button>
                    <img src="app/components/images/Star.png" alt="rating-star" className="w-4 h-4"/>
                </button>
                <button>
                    <img src="app/components/images/Star.png" alt="rating-star" className="w-4 h-4" />
                </button>
                <button>
                    <img src="app/components/images/Star.png" alt="rating-star" className="w-4 h-4" />
                </button>
                <button>
                    <img src="app/components/images/Star.png" alt="rating-star" className="w-4 h-4" />
                </button>
                <button>
                    <img src="app/components/images/Star copy.png" alt="rating-star" className="w-4 h-4"/>
                </button>
            </div>
            <span className="text-xs  ml-2 font-roboto text-blackSecColor">(8)</span>
        </div>
    )
}

    