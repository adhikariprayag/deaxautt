import React from 'react'

import '../scss/main.scss'
import Button from '../components/Button'

//Importing Images
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
            <Button cta="Estimate Project" style="white"/>
           </div>
          </div>

          <img src={er} alt="" className='img-3' />
          <img src={svg2} alt="svg img-2" className='svg img-2'/>
        </section>

        <section className='footer2 py-20'>

        </section>
    </footer>
  )
}

export default Footer