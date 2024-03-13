import React from 'react'
import Home from './component/Home';
import About from './component/About';
import Why from './component/Why';
import Header from './layout/Header';
function page() {
    return (
        <>
            <header class="header-area">
                <Header></Header>
            </header>
            <Home />
            <About />
            <Why />
        </>
    )
}

export default page