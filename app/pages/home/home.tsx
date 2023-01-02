import React from 'react'
import { Carousel } from '../../components/carousel'
import { Navbar } from '../../components/navbar/navbar'
import { Topbar } from '../../components/topbar'
import { MatchItWith } from './sections/match-it-with'
import { PopularCategories } from './sections/popular-categories'
// import { Banner } from './components/banner-cta'  
import { Newsletter } from './sections/newsletter'
import { ShareThought } from './sections/share-your-thought'
import { InstagramFeed } from './sections/instagram-feed'
import { DownloadBanner } from './sections/download-banner'
import { FooterMobileMenu } from './sections/footer-mobile-menu'
import { FooterSocials } from './sections/footer-socials'
import { Footer } from './sections/footer'

export function Home() {
    return (
        <div className="w-full">
            <Topbar />
            <Navbar />
            <Carousel />
            <div className="lg:mx-24">
                <PopularCategories />
            </div>
            
            <div className="mx-4 lg:mx-24">
                <MatchItWith />
                <Newsletter />
                <ShareThought />
            </div>
            <div className="lg:mx-60">
                <InstagramFeed/>
            </div>
            <div className="mx-24 mt-16">
                <DownloadBanner/>
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
