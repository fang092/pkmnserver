import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Pokelogo.svg';

export default function Navbar() {
  return (
    <div className='w-full h-12  bg-rosemadder flex flex-row  items-center p-6 mb-7'>
        <h4>
            <Link className='text-platnium' to="/"><img src={logo} className="w-10 h-10" alt="logo"/></Link> 
        </h4>
    </div>
  )
}
