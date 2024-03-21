import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '../scss/main.scss'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';

//Importing Pictures
import mainLogo from '../assets/logo-main.png'
import sideLogo from '../assets/logo.png'
import ins1 from '../assets/ins1.jpg'
import ins2 from '../assets/ins2.jpg'
import ins3 from '../assets/ins3.jpg'
import ins4 from '../assets/ins4.jpg'
import ins5 from '../assets/ins5.jpg'
import ins6 from '../assets/ins6.jpg'


function Navbar() {

    //Menu Button Handeling on Mobile Device
    const [handlemenu, sethandlemenu] = useState('hidden')
    function handle() {
        sethandlemenu(prevmenu => (prevmenu === 'hidden' ? 'block animate__slideInRight' : 'hidden'))
    }

    const [handlesearch, sethandlesearch] = useState('hidden')
    function search() {
        sethandlesearch(prevmenu => (prevmenu === 'hidden' ? 'block animate__fadeIn' : 'hidden'))
    }

    return (
        <>
            <nav className="navbar">
                <div className="wrapper flex justify-between h-full w-full">

                    <div className="navbar-left w-[9%] h-full items-center justify-center" onClick={handle}>
                        <i className="ri-menu-2-fill text-5xl cursor-pointer"></i>
                    </div>

                    <div className="navbar-mid flex items-center justify-between xl:w-[80%] w-[91%] h-full px-6 flex-wrap">
                        <div>
                            <Link to="/"><img src={mainLogo} className='cursor-pointer' alt="Logo"></img></Link>
                        </div>

                        <div className='navbar-links'>
                            <ul className='flex items-center gap-10'>
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/services'>Services</NavLink></li>
                                <li><NavLink to='/pages'>Pages</NavLink></li>
                                <li><NavLink to='/projects'>Projects</NavLink></li>
                                <li><NavLink to='/blog'>Blog</NavLink></li>
                                <li><NavLink to='/contact'>Contact</NavLink></li>
                            </ul>
                        </div>

                        <div className='nav-search'>
                            <i className="ri-search-line text-xl cursor-pointer" onClick={search}></i>
                        </div>

                        <div className='mobile-menu'>
                            <i className="ri-apps-line text-2xl cursor-pointer" onClick={handle}></i>
                        </div>
                    </div>

                    <Link to='/contact' className="navbar-right w-[11%] h-full xl:flex hidden justify-center items-center">
                        <div className='nav-right-link'>
                            Get In Touch
                        </div>
                    </Link>
                </div>
            </nav>

            {/* SIDE MENU */}
            <div className={`navbar-offcanvas h-[100dvh] sm:w-[50%] md:w-[30%] w-[90%] fixed top-0 right-0 bg-white z-[50001] animate__animated animate__fast ${handlemenu} `}>

                <div className='px-4 py-4'>
                    <div className='offcanvas-top flex justify-between flex-wrap py-8 '>
                        <img src={sideLogo} alt="Logo" />
                        <i className="ri-close-circle-line text-2xl text-gray-500 cursor-pointer" onClick={handle}></i>
                    </div>

                    <div className="offcanvas-mid ">
                        <ul className='py-5'>
                            <li className='offcanvas-title'>Office Address</li>
                            <li>123/A, Miranda City Likaoli</li>
                            <li>Prikano, Dope</li>
                        </ul>

                        <ul className='pb-5' >
                            <li className='offcanvas-title'>Phone Number</li>
                            <li>+0989 7876 9865 9</li>
                            <li>+(090) 8765 86543 85</li>
                        </ul>

                        <ul className='pb-5' >
                            <li className='offcanvas-title'>Email Address</li>
                            <li>info@example.com</li>
                            <li>example.mail@hum.com</li>
                        </ul>

                        <div className='offcanvas-images'>
                            <div className='flex gap-3 flex-wrap'>
                                <img src={ins1} alt="a post image" />
                                <img src={ins2} alt="a post image" />
                                <img src={ins3} alt="a post image" />
                            </div>

                            <div className='flex gap-3 mt-2 flex-wrap'>
                                <img src={ins4} alt="a post image" />
                                <img src={ins5} alt="a post image" />
                                <img src={ins6} alt="a post image" />
                            </div>
                        </div>
                    </div>

                    <div className="mobile-menu">
                        <form>
                            <input type="text" name="search" id="" placeholder='Search here...' className=' search-menu w-full py-2 px-2 mt-3 rounded-[2px]' />
                            <button className='form-btn'><i className="ri-search-line absolute right-8 top-[135px] text-xl font-bold"></i></button>
                        </form>
                        <ul className='flex flex-col gap-5 mt-5'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/pages'>Pages</NavLink></li>
                            <li><NavLink to='/projects'>Projects</NavLink></li>
                            <li><NavLink to='/blog'>Blog</NavLink></li>
                            <li className='lst'><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>

                    </div>

                    <div className='offcanvas-end flex gap-3 mt-4'>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-line"></i>
                        <i className="ri-twitter-x-fill"></i>
                        <i className="ri-youtube-fill"></i>
                    </div>
                </div>

            </div>
            {/* SIDE MENU */}

            {/* SEARCH MENU */}
            <div className={`search-menu-full fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center animate__animated ${handlesearch}`}>
                <form action="" className='w-[50%] mx-auto align-middle'>
                    <div className='input-box relative'>
                        <input type="text" name="search" id="search" placeholder='Enter Your Key Words...' className='py-5 w-full bg-transparent' />
                        <button className='form-btn'><i className="ri-search-line absolute right-0 top-[45%] text-3xl font-bold text-white"></i></button>
                    </div>
                </form>
            </div>
            {/* SEARCH MENU */}
        </>
    )
}

export default Navbar