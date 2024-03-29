import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/main.scss'
import Button from '../components/Button'

//IMPORTING IMAGES
import s1 from '../assets/service_icon_1.svg'
import s2 from '../assets/service_icon_2.svg'
import s3 from '../assets/service_icon_3.svg'
import s4 from '../assets/service_icon_4.png'
import service_icon from '../assets/service-icon.svg'

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

        <section className="services-main">
          <div className="container px-10 flex justify-between items-center lg:flex-row flex-col gap-5">
            <div className="lg:w-[30%] w-full">
              <h6 className='rClr font-bold'>WE CAN DO FOR YOU</h6>
              <h2 className='text-5xl text-white font-bold py-5'>Services We can Help You.</h2>
              <p className='text-gray-400 pb-5'>Lorem ipsum dolor sit amet consectetur. Ut a tellus suspendisse nulla aliquam. Risu dumm amet facilisis the egestas.</p>
              <div>
                <Button cta="See All Services" style="red" link='/' />
              </div>
            </div>

            <div className="lg:w-[60%] w-full  ">
              <div className='flex gap-5 flex-wrap sm:flex-nowrap'>
                <div className="service-box flex flex-col gap-5">
                  <div className='w-full flex justify-start'><img src={s1} alt="" /></div>
                  <h2 className='text-white font-semibold text-xl sm:text-3xl'>UI/UX Design</h2>
                  <p className='text-gray-400'>Lorem ipsum dolor amet consetetur. Ut tellus suspen aliquam.</p>
                  <a href=""><p className='text-white'>Learn More</p></a>
                </div>
                <div className="service-box flex flex-col gap-5">
                  <div className='w-full flex justify-start'><img src={s2} alt="" /></div>
                  <h2 className='text-white font-semibold text-xl sm:text-3xl'>Web Development</h2>
                  <p className='text-gray-400'>Lorem ipsum dolor amet consetetur. Ut tellus suspen aliquam.</p>
                  <a href=""><p className='text-white'>Learn More</p></a>
                </div>
              </div>

              <div className='flex gap-5 mt-5 flex-wrap sm:flex-nowrap'>
                <div className="service-box flex flex-col gap-5">
                  <div className='w-full flex justify-start'><img src={s3} alt="" /></div>
                  <h2 className='text-white font-semibold text-xl sm:text-3xl'>UI/UX Design</h2>
                  <p className='text-gray-400'>Lorem ipsum dolor amet consetetur. Ut tellus suspen aliquam.</p>
                  <a href=""><p className='text-white'>Learn More</p></a>
                </div>
                <div className="service-box flex flex-col gap-5">
                  <div className='w-full flex justify-start'><img src={s4} alt="" /></div>
                  <h2 className='text-white font-semibold text-xl sm:text-3xl'>Web Development</h2>
                  <p className='text-gray-400'>Lorem ipsum dolor amet consetetur. Ut tellus suspen aliquam.</p>
                  <a href=""><p className='text-white'>Learn More</p></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-our py-28">
          <div className="container px-10 flex flex-col items-center gap-5">
            <h5 className="title-sm">OUR SERVICES</h5>
            <h2 className='sm:text-5xl text-2xl text-center sm:w-[70%] w-full mClr'>Technology services built specifically for your business</h2>
            <div className='w-full flex gap-5 justify-center flex-wrap  mt-10'>
              <div className=' w-full our-box our-box-1'>
                <div className='img-con'>
                  <span className='our-box-icon'></span>
                  <img src={service_icon} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5>Branding Support</h5>
                  <p>Lorem ipsum dolor sity amet consectetur suspen disse the aliquam many done.</p>
                </div>
              </div>

              <div className=' w-full our-box our-box-2'>
                <div className='img-con'>
                  <span className='our-box-icon'></span>
                  <img src={service_icon} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5>Business Planning</h5>
                  <p>Lorem ipsum dolor sity amet consectetur suspen disse the aliquam many done.</p>
                </div>
              </div>

              <div className=' w-full our-box our-box-3'>
                <div className='img-con'>
                  <span className='our-box-icon'></span>
                  <img src={service_icon} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5>Analytic Solutions</h5>
                  <p>Lorem ipsum dolor sity amet consectetur suspen disse the aliquam many done.</p>
                </div>
              </div>

            </div>

            <div className='w-full flex gap-5 justify-center flex-wrap'>
              <div className=' w-full our-box our-box-4'>
                <div className='img-con'>
                  <span className='our-box-icon'></span>
                  <img src={service_icon} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5>Data Security</h5>
                  <p>Lorem ipsum dolor sity amet consectetur suspen disse the aliquam many done.</p>
                </div>
              </div>

              <div className=' w-full our-box our-box-5'>
                <div className='img-con'>
                  <span className='our-box-icon'></span>
                  <img src={service_icon} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5>It consultancy</h5>
                  <p>Lorem ipsum dolor sity amet consectetur suspen disse the aliquam many done.</p>
                </div>
              </div>

              <div className=' w-full our-box our-box-6'>
                <div className='img-con'>
                  <span className='our-box-icon'></span>
                  <img src={service_icon} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                  <h5>It Management</h5>
                  <p>Lorem ipsum dolor sity amet consectetur suspen disse the aliquam many done.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Services