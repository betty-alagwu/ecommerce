import React from 'react'
import { BlackBtn } from './blackbtn'

interface TextProps{
    className?: string
}

export function BannerText(props: TextProps) {
    return <div className={`font-raleway ${props.className} flex flex-col pt-11 `}>
        <span className="text-base text-primarygrey" >SHOES</span>
        <span className="pt-5 text-4xl text-blackPrimary" >COCTAIL & PARTY</span>
        <span className="pt-16 font-roboto  h-[220px] text-base text-blackPrimary" >Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</span>
        <BlackBtn/>
    </div>
}