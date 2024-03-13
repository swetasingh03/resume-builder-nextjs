import React from 'react'

function Footer() {
    return (
        <>
            <footer id="footer" class="relative z-10 footer-area pt-120">
                <div class="footer-bg" style={{ "background-image": "url(assets/images/footer-bg.svg)" }}></div>
                <div class="container">

                    <div class="footer-widget pb-120">
                    </div>
                    <div class="py-8 border-t border-gray-200 footer-copyright">
                        <p class="text-white">
                            Develop and Design By<a class="duration-300 hover:text-theme-color-2" href="https://tailwindtemplates.co" rel="nofollow" target="_blank"> @Web_Dev_Sweta</a>
                        </p>
                    </div>
                </div>
                <div id="particles-2" class="particles"></div>
            </footer>
            <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
        </>
    )
}

export default Footer