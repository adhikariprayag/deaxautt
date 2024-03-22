import React, { useEffect, useState } from 'react'

import '../scss/main.scss'

function Gtt() {

    //Handeling Go to top button
    const [gttBtn, setgttbtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setgttbtn(true)
            } else {
                setgttbtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
        {gttBtn &&(
            <div className='gtt-btn cursor-pointer animate__animated animate__jackInTheBox' onClick={scrollUp}>
                <i className="ri-arrow-up-s-line text-2xl"></i>
            </div>
        )}
        </>
    )
}

export default Gtt