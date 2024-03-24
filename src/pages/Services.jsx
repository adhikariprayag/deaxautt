import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/main.scss'



function Services() {
  return (
    <>
      <main className="services">
        <section className="services-top py-16">
          <div className="container flex flex-col gap-3 text-white px-5">
            <h3 className="page-title text-2xl font-bold">All Services</h3>
            <div className="nav-btn w-fit">
              <Link to="/" className='home-link'>Home</Link> <span className='text-xl px-3'>/</span> <span className='font-bold'>Services</span>
            </div>
          </div>
        </section>

        <section className="home-services mt-20">
          <div className="container flex flex-col px-5">

            <div className="title-sm mx-auto">OUR SERVICES</div>

            <div className="flex flex-col items-center py-5 gap-16 px-5">
              <h2 className='sm:text-5xl text-2xl text-center sm:w-[50%] w-full mClr'>We Provide wide Range of Digital Services</h2>
            </div>

            <div className='w-full service-boxes flex flex-wrap xl:flex-nowrap mt-10 lg:items-start  gap-5'>
              <div className="service-box w-full lg:w-[30%] mx-2 sm:w-[45%]">
                <i className="ri-instance-line box-icon text-orange-600"></i>
                <a href=""><h3 className='box-title'>Product Managemet</h3></a>
                <a href=""><p className='box-more'>Find Out More</p></a>
              </div>

              <div className="service-box box-2 w-full lg:w-[30%] mx-2 sm:w-[45%] ">
                <i className="ri-code-box-line box-icon text-red-500"></i>
                <a href=""><h3 className='box-title mx-auto w-[60%] text-center'>Web & Mobile Development</h3></a>
                <a href=""><p className='box-more'>Find Out More</p></a>
              </div>

              <div className="service-box w-full lg:w-[30%] mx-2 sm:w-[45%] ">
                <i className="ri-tools-line box-icon text-pink-600"></i>
                <a href=""><h3 className='box-title'>Fast Customer Support</h3></a>
                <a href=""><p className='box-more'>Find Out More</p></a>
              </div>

              <div className="service-box w-full lg:w-[30%] mx-2 sm:w-[45%] ">
                <i className="ri-settings-3-line box-icon text-sky-400"></i>
                <a href=""><h3 className='box-title mx-auto w-[70%] text-center'>Digital Marketing Optimization</h3></a>
                <a href=""><p className='box-more'>Find Out More</p></a>
              </div>

            </div>

            <p className='py-16 text-center font-light text-lg'>Bring them together and you overcome the ordinary. <span className='underline span-text'><a href="">See what we do</a></span></p>
          </div>
        </section>

        
      </main>
    </>
  )
}

export default Services