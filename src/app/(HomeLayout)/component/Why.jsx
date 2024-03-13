import Link from 'next/link'
import React from 'react'

function Why() {
    return (
        <section class="relative pt-20 about-area">
            <div class="about-shape-2">
                <img src="assets/images/about-shape-2.svg" alt="shape" />
            </div>
            <div class="container">
                <div class="row">
                    <div class="w-full lg:w-1/2 lg:order-last">
                        <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div class="mb-4 section-title">
                                <div class="line"></div>
                                <h3 class="title">Why Choose <span> Resume Craft ?</span></h3>
                            </div>
                            <h6 class="mb-8">Elevate your career with Resume Craft, where innovation meets individuality in resume building. Unlike generic platforms, we offer cutting-edge technologies and customizable templates tailored to your unique strengths and aspirations. Our user-friendly interface ensures efficiency without compromising quality, creating visually appealing resumes that make a lasting impression. Access your tools anytime, anywhere, prioritizing flexibility in your career journey. Join Resume Craft for a confidential, secure, and transformative resume-building experience, setting the stage for new opportunities in your professional evolution.</h6>
                            <Link href="/form" class="main-btn gradient-btn">Try it Free</Link>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 lg:order-first">
                        <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src="assets/images/about2.svg" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why