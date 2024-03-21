import React from 'react'
import { Link } from 'react-router-dom';

import '../scss/main.scss'


function Button(props) {

    const {cta, style, link} = props;

  return (
    <div className='button-primary'>
       <Link to={link} target='_blank'><button className={style}>{cta}</button></Link>
    </div>
  )
}

export default Button

//USAGE EXAMPLE
{/* <Button cta="Load More" style="sky" link='/' /> */}