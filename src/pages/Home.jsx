import React from 'react'

import Button from '../components/Button'
import '../scss/main.scss'

//IMPORTING REACT-SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//IMPORTING SWIPER JS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


//Importing Images
//--Hero images
import hero2 from '../assets/h2-right-image.png'
import hero1 from '../assets/h2-left-image.png'
import hero3 from '../assets/h2-featured-right.png'
//--Customers images
import spn1 from '../assets/sponsors-1.png'
import spn2 from '../assets/sponsors-2.png'
import spn3 from '../assets/sponsors-3.png'
import spn4 from '../assets/sponsors-4.png'
import spn5 from '../assets/sponsors-5.png'
import spn6 from '../assets/sponsors-6.png'
//--Icons
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
//--Projects
import pr1 from '../assets/project_h2-01.jpg'
import pr2 from '../assets/project_h2-02.jpg'
import pr3 from '../assets/project_h2-03.jpg'
import pr4 from '../assets/project_h2-04.jpg'
//-Clients
import c1 from '../assets/client1.png'
import c2 from '../assets/client2.png'
import c3 from '../assets/client3.png'
import c4 from '../assets/client4.png'
import c5 from '../assets/client5.png'

function Home() {

    //REACT-SLICK Settings
    var settings = {
        className: "center",
        infinite: true,
        centerMode: true,
        speed: 500,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    cssEase: "linear"
                }
            }
        ]
    };

    //SWIPER-JS

    return (
        <>
            <main className='home py-5'>
                <div className="container home-container flex flex-col justify-center items-center gap-10 px-10 relative text-center">
                    <h2 className='sm:text-5xl text-2xl text-center sm:w-[65%] w-full'>Analyze and Find the Perfect Solutions for Business</h2>
                    <p className='sm:w-[40%] w-full text-center'>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse nulla aliquam rutrum tell ultrices pretium</p>

                    <form action="" className='flex flex-wrap sm:flex-nowrap gap-3 sm:gap-0 justify-center'>
                        <input type="text" name="name" id="name" placeholder='Enter Your Name' className='py-4 px-8 w-full' />
                        <button type="submit" className='home-sbtn font-bold text-white w-full'>Get Started</button>
                    </form>

                    <div className="home-images">
                        <img src={hero1} alt="3d illustration" className='img-1 absolute left-0 bottom-[-1px]' />
                        <img src={hero2} alt="3d illustration" className='img-2 absolute right-0 hidden lg:block bottom-[-1px]' />
                    </div>
                </div>

                <section className='home-customer'>
                    <div className="container flex items-center flex-col py-28 px-10 text-center">
                        <h3 className='header-sm sm:text-3xl text-2xl text-center sm:w-[65%] w-full'>Over <span className='semi-bold'>32k+</span> software businesses growing on!</h3>

                        {/* REACT_SLICK_FOR_CUSTOMERS */}
                        <div className='container pt-20 pb-10 align-center home-slider'>

                            <Slider {...settings}>
                                <div className=''>
                                    <img src={spn1} alt="sponsor img" className='mx-auto' />
                                </div>
                                <div className='w-full flex justify-center'>
                                    <img src={spn2} alt="sponsor img" />
                                </div>
                                <div>
                                    <img src={spn3} alt="sponsor img" />
                                </div>
                                <div>
                                    <img src={spn4} alt="sponsor img" />
                                </div>
                                <div>
                                    <img src={spn5} alt="sponsor img" />
                                </div>
                                <div>
                                    <img src={spn6} alt="sponsor img" />
                                </div>
                            </Slider>

                        </div>

                    </div>
                </section>

                <section className="home-services">
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

                <section className='home-whyUs py-10'>
                    <div className="container px-5 relative ">
                        <div className='flex flex-col items-center'>
                            <div className="title-sm ">WHY CHOOSE US</div>
                            <div className="w-full">
                                <h2 className='sm:text-5xl text-2xl sm:w-[50%] w-full mClr mt-5 '>We help you Overcome your Technology</h2>
                                <div className='py-10 flex flex-col gap-10'>
                                    <div className='flex items-center gap-5 flex-wrap'>
                                        <div><img src={icon1} alt="" className='img-icon img-icon-1 bg-[#FFF7DE]' /></div>
                                        <div>
                                            <div className='title-md'>Working Process</div>
                                            <p className='text-gray-400 font-light mt-2'>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse aliquam.</p>
                                        </div>
                                    </div>


                                    <div className='flex items-center gap-5 flex-wrap'>
                                        <div><img src={icon2} alt="" className='img-icon img-icon-2 bg-[#FFF7DE]' /></div>
                                        <div>
                                            <div className='title-md'>Dedicated Team</div>
                                            <p className='text-gray-400 font-light mt-2'>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse aliquam.</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-5 flex-wrap'>
                                        <div><img src={icon3} alt="" className='img-icon img-icon-3 bg-[#FFF7DE]' /></div>
                                        <div>
                                            <div className='title-md'>24/7 Hours Support</div>
                                            <p className='text-gray-400 font-light mt-2'>Lorem ipsum dolor sit amet consectetur. Ut tellus suspendisse aliquam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='absolute right-0 top-[50%] translate-y-[-50%] z-[-10] lg:z-10 opacity-30 lg:opacity-[1]'>
                            <img src={hero3} alt="Earth 3d" className='mt-10' />
                        </div>

                    </div>

                </section>

                <section className="home-projects py-10 px-5">
                    <div className="container flex justify-center flex-col items-center ">
                        <div className="title-sm ">OUR PROJECT</div>
                        <div>
                            <h2 className='sm:text-5xl text-2xl sm:w-[90%] w-full mClr mt-5 text-center mx-auto'>Some of our Finest Amazing Done Work.</h2>
                        </div>
                        <div className='flex mt-4 flex-wrap justify-center gap-5'>

                            <div className="pb-con">
                                <div className='project-box'>
                                    <a href=""><img src={pr1} alt="" /></a>
                                    <div className='project-box-hover'>
                                        <a href=""><h5 className='pb-title'>Branding Design</h5></a>
                                        <p className='pb-des'>Full Branding, Website, App</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-con">
                                <div className='project-box'>
                                    <a href=""><img src={pr2} alt="" /></a>
                                    <div className='project-box-hover'>
                                        <a href=""><h5 className='pb-title'>Digital Marketing</h5></a>
                                        <p className='pb-des'>Website Design</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-con">
                                <div className='project-box'>
                                    <a href=""><img src={pr3} alt="" /></a>
                                    <div className='project-box-hover'>
                                        <a href=""><h5 className='pb-title'>3D Design</h5></a>
                                        <p className='pb-des'>Branding Design</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pb-con">
                                <div className='project-box'>
                                    <a href=""><img src={pr4} alt="" /></a>
                                    <div className='project-box-hover'>
                                        <a href=""><h5 className='pb-title'>Social Engagement</h5></a>
                                        <p className='pb-des'>UI/UX Design</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='mt-16'>
                            <Button cta="Load More" style="sky" link='/' />
                        </div>
                    </div>
                </section>

                {/* <section className="home-testimonials py-10 px-5">
                    <div className="container flex  flex-col items-center ">
                        <div className="title-sm ">TESTIMONIALS</div>
                        <div>
                            <h2 className='sm:text-5xl text-2xl sm:w-[90%] w-full mClr mt-5 text-center mx-auto'>Entrust Your Growth to Professionals</h2>
                        </div>

                        <div className='py-10'>
                            <div className="container pt-20 pb-10 align-center px-10 overflow-hidden">

                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={5}
                                    loop={true}
                                    breakpoints={{
                                        // when window width is >= 640px
                                        540: {
                                          width: 540,
                                          slidesPerView: 1,
                                        },

                                        768: {
                                            width: 768,
                                            slidesPerView: 2,
                                        },
                                        // when window width is >= 768px
                                        1024: {
                                          width: 1024,
                                          slidesPerView: 3,
                                        },
                                      }}
                                    className="mySwiper w-full"
                                >
                                    <SwiperSlide className=''>
                                        <div className='testimonial-box md '>
                                            <div className='testimonial-img'> <img src={c1} alt="" /></div>
                                            <p className='testimonial-des text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat repudiandae perspiciatis, sed quos culpa possimus nihil fugit animi aliquid! Ad, fugiat culpa.</p>
                                            <div className='testimonial-icon'><i className="ri-double-quotes-r"></i></div>
                                            <div className='testimonial-name flex flex-col items-center'>
                                                <h5>Jenny Dilson</h5>
                                                <p>Director of Content</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='testimonial-box '>
                                            <div className='testimonial-img'> <img src={c1} alt="" /></div>
                                            <p className='testimonial-des text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat repudiandae perspiciatis, sed quos culpa possimus nihil fugit animi aliquid! Ad, fugiat culpa.</p>
                                            <div className='testimonial-icon'><i className="ri-double-quotes-r"></i></div>
                                            <div className='testimonial-name flex flex-col items-center'>
                                                <h5>Jenny Dilson</h5>
                                                <p>Director of Content</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='testimonial-box '>
                                            <div className='testimonial-img'> <img src={c1} alt="" /></div>
                                            <p className='testimonial-des text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat repudiandae perspiciatis, sed quos culpa possimus nihil fugit animi aliquid! Ad, fugiat culpa.</p>
                                            <div className='testimonial-icon'><i className="ri-double-quotes-r"></i></div>
                                            <div className='testimonial-name flex flex-col items-center'>
                                                <h5>Jenny Dilson</h5>
                                                <p>Director of Content</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='testimonial-box '>
                                            <div className='testimonial-img'> <img src={c1} alt="" /></div>
                                            <p className='testimonial-des text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat repudiandae perspiciatis, sed quos culpa possimus nihil fugit animi aliquid! Ad, fugiat culpa.</p>
                                            <div className='testimonial-icon'><i className="ri-double-quotes-r"></i></div>
                                            <div className='testimonial-name flex flex-col items-center'>
                                                <h5>Jenny Dilson</h5>
                                                <p>Director of Content</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className='testimonial-box '>
                                            <div className='testimonial-img'> <img src={c1} alt="" /></div>
                                            <p className='testimonial-des text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem placeat repudiandae perspiciatis, sed quos culpa possimus nihil fugit animi aliquid! Ad, fugiat culpa.</p>
                                            <div className='testimonial-icon'><i className="ri-double-quotes-r"></i></div>
                                            <div className='testimonial-name flex flex-col items-center'>
                                                <h5>Jenny Dilson</h5>
                                                <p>Director of Content</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>

                    </div>
                </section> */}
            </main>
        </>
    )
}

export default Home