import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full h-12  bg-sunglow flex flex-row  items-center p-6 mb-7'>
        <h4>
            <Link to="/">PokeCodex</Link> 
        </h4>
    </div>
  )
}
