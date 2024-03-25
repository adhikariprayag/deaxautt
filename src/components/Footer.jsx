import React from 'react'

import '../scss/main.scss'
import Button from '../components/Button'

//Importing Images
import logo from '../assets/logo-white.png'
import svg1 from '../assets/element1.svg'
import svg2 from '../assets/element2.svg'
import er from '../assets/estimate-right.png'

function Footer() {
  return (
    <footer>
      <section className="footer ">
        <img src={svg1} alt="" className='svg img-1' />

        <div className="container footer-top px-5 text-white flex flex-col gap-5">
          <h5 className='font-semibold text-xl'>LET'S WORK TOGETHER</h5>
          <h2 className='md:text-5xl text-2xl font-extrabold w-[60%]'>NEED A SUCCESSFUL YOUR PROJECT?</h2>
          <div>
            <Button cta="Estimate Project" style="white" />
          </div>
        </div>

        <img src={er} alt="" className='img-3' />
        <img src={svg2} alt="svg img-2" className='svg img-2' />
      </section>

      <section className='footer2 py-5'>
        <div className="container container-top flex flex-col lg:flex-row px-10 gap-10 py-8">
          <div className="lg:w-[60%] w-full flex text-white flex-wrap">

            <div className='sm:w-1/3 w-full'>
              <img src={logo} alt="" />
              <p className='w-[90%] py-5 text-gray-400'>Lorem ipsum dolo consectetur the adipiscing Lobortis mattis neque adipiscing nisl.</p>
              <div className='flex gap-5 text-gray-400'>
                <i className="ri-facebook-fill"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-linkedin-box-fill"></i>
              </div>
            </div>

            <ul className='sm:w-1/3 w-full text-gray-400 flex flex-col gap-5 '>
              <li ><a href="" className='text-xl font-bold text-white'>Our Company</a></li>
              <li className='footer-links'><a href="">Company</a></li>
              <li className='footer-links'><a href="">Careers</a></li>
              <li className='footer-links'><a href="">Press media</a></li>
              <li className='footer-links'><a href="">Our Blog</a></li>
              <li className='footer-links'><a href="">Web Services</a></li>
            </ul>

            <ul className='sm:w-1/3 w-full text-gray-400 flex flex-col gap-5'>
              <li><a href="" className='text-xl font-bold text-white'>Services</a></li>
              <li className='footer-links'><a href="">Strategy & Research</a></li>
              <li className='footer-links'><a href="">Data Analytics</a></li>
              <li className='footer-links'><a href="">Data Visualization</a></li>
              <li className='footer-links'><a href="">Deep Learning</a></li>
              <li className='footer-links'><a href="">Statistical Modeling</a></li>
            </ul>

          </div>

          <div className="lg:w-[40%] w-full flex flex-col flex-wrap gap-8">
            <h3 className='w-[60%] text-white font-bold text-3xl'>Get Latest Updates and big deals</h3>
            <form action="" className='w-full form-section'>
              <input type="text" placeholder='Get News & Updates' className='w-full py-3 px-1 bg-transparent text-white outline-none' />
              <button type="submit" className='submit-btn'><i className="ri-send-plane-line"></i></button>
            </form>
            <p className='text-gray-400'>Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>
          </div>
        </div>
        <div className="container flex flex-wrap gap-5 justify-between px-10 items-center py-4 mt-5 text-gray-300">
          <h2><span className='rClr'>Deaxautt</span> @ 2023. All Rights Reserved.</h2>
          <ul className='flex flex-wrap gap-5'>
            <li>Privacy & Terms.</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </section>
    </footer>
  )
}

export default Footer