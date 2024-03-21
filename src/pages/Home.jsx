import React from 'react'

import '../scss/main.scss'

//Importing Images
import hero2 from '../assets/h2-right-image.png'
import hero1 from '../assets/h2-left-image.png'

function Home() {
  return (
    <>
        <main className='home py-5'>
            <div className="container home-container flex flex-col justify-center items-center gap-10 px-10 relative text-center">
                <h2 className='sm:text-5xl text-2xl text-center sm:w-[65%] w-full'>Analyze and Find the Perfect Solutions for Business</h2>
                <p className='sm:w-[40%] w-full text-center'>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam rutrum tell ultrices pretium</p>

                <form action="" className='flex flex-wrap sm:flex-nowrap gap-3 sm:gap-0 justify-center'>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' className='py-4 px-8 w-full'/>
                    <button type="submit" className='home-sbtn font-bold text-white '>Get Started</button>
                </form>

                <div className="home-images">
                    <img src={hero1} alt="3d illustration" className='img-1 absolute left-0 bottom-[-1px]'/>
                    <img src={hero2} alt="3d illustration" className='img-2 absolute right-0 hidden lg:block bottom-[-1px]' />
                </div>
            </div>
        </main>
    </>
  )
}

export default Home