import React from 'react'
import { BannerText } from './banner-text'


interface BannerProps {
    className?: string
}

export function Banner(props: BannerProps) {
    return (
        <div className={`hidden lg:block  bg-cover ${props.className}`} style={
            {
                backgroundImage: "url('app/components/images/Benner1-image.png')",
            }
        }>
        <BannerText className='px-12'/>
        </div>
    )
}