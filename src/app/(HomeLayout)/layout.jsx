import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'

function RootLayout({ children }) {
    return (
        <>

            <div className="">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default RootLayout