import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header className='py-2'>
            <nav className='bg-white py-2'>
                <div className='w-10/12 container mx-auto flex justify-between items-center'>
                    <div>
                        <a href="/"><img src="/images/Group 2.png" alt="" className='w-30'/></a>
                    </div>
                    <div className='flex items-center justify-center gap-4 text-[12px] md:text-[18px]'>
                        <NavLink to='/new-tasks' className={({ isActive }) => isActive ? "hidden" : "font-semibold"}>New Tasks</NavLink>
                        <NavLink to='/all-tasks' className={({  isActive }) => isActive ? "hidden" : "font-semibold"}>All Tasks</NavLink>
                        <img src="/images/Group 6.png" alt="" className='w-12'/>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default NavBar