import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/Pokelogo.svg';
import bglogo from '../images/logo_md.svg';
import leftarrow from '../images/leftarrow.png';

export default function Navbar() {
  return (
    <div className='w-full h-12  bg-rosemadder flex flex-row justify-between items-center p-6 mb-7'>
      <h4>
        <Link className='text-platnium flex flex-row  items-center' to="/"><img src={logo} className="w-10 h-10" alt="logo"/>PokeCodex</Link> 
      </h4>
      <a className='text-platnium flex flex-row  items-center' href='https://bradgrad.design/#projects'><img src={leftarrow} alt="Left Arrow" /><img src={bglogo} className="w-10 h-10" alt="logo"/> </a> 
    </div>
  )
}
