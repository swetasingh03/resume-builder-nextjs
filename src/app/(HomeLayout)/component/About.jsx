import Link from 'next/link'
import React from 'react'

function About() {
    return (
        <section id="about" class="relative pt-20 about-area">
            <div class="container">
                <div class="row">
                    <div class="w-full lg:w-1/2">
                        <div class="mx-4 mt-12 about-content wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div class="mb-4 section-title">
                                <div class="line"></div>
                                <h3 class="title">Quick & Easy <span>to Use Resume Craft</span></h3>
                            </div>
                            <h6 class="mb-8">Welcome to Resume Craft, where we believe in turning career aspirations into accomplishments. We understand the pivotal role a compelling resume plays in achieving professional success. That's why we've created an innovative platform to simplify the resume-building process, making it seamless, efficient, and tailored to your unique journey.

                                At Resume Craft, we offer a range of intuitive tools and customizable templates to help you craft a standout resume effortlessly. Whether you're a seasoned professional aiming for new heights or an entry-level candidate eager to make a mark, our platform is designed to meet your specific needs.</h6>
                            <Link href="/form" class="main-btn gradient-btn">Try it Free</Link>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2">
                        <div class="mx-4 mt-12 text-center about-image wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                            <img src="assets/images/about1.svg" alt="about" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-shape-1">
                <img src="assets/images/about-shape-1.svg" alt="shape" />
            </div>
        </section>
    )
}

export default About