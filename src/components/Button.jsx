import React from 'react'
import '../scss/main.scss'
import { Link } from 'react-router-dom';


function Button(props) {

    const {cta, style, link} = props;

  return (
    <div className='button-primary'>
       <Link to={link} target='_blank'><button className={style}>{cta}</button></Link>
    </div>
  )
}

export default Button