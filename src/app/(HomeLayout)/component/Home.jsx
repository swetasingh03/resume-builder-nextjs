import Link from 'next/link'
import React from 'react'

function Home() {
    return (
        <div id="home" class="header-hero" style={{ "background-image": "url(assets/images/banner-bg.svg)" }}>
            <div class="container">
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
                            <h3 class="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Elevate Your Career With Resume Craft </h3>

                            <h2 class="mb-3 text-4xl font-bold text-white header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">The Ultimate Resume Builder</h2>
                            <h6 class="mb-8 text-white text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Craft a professional resume in minutes with our user-friendly interface.</h6>
                            <Link href="/form" class="main-btn gradient-btn gradient-btn-2 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div class="justify-center row">
                    <div class="w-full lg:w-2/3">
                        <div class="text-center header-hero-image wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                            <img src="assets/images/header-hero.png" alt="hero" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="particles-1" class="particles"></div>
        </div>
    )
}

export default Home