import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
    const navigate = useNavigate()
    const {user, logout} = useContext(AuthContext)

    const handleLogout = () => {
    logout()
    setTimeout(()=> navigate('/login'), 1000) 
  };
  return (
    <div>
        <header className='py-2'>
            <nav className='bg-white py-2'>
                <div className='w-10/12 container mx-auto flex justify-between items-center'>
                    <div>
                        <a href="/profile"><img src="/images/Group 2.png" alt="" className='w-30'/></a>
                    </div>
                    <div>
                        {user.email}
                    </div>
                    <div className='flex items-center justify-center gap-4 text-[12px] md:text-[18px]'>
                        {!user && (
                            <>
                                <NavLink to="/login" className={({ isActive }) => isActive ? "hidden" : "font-medium"}>Login</NavLink>
                                <NavLink to="/signup" className={({ isActive }) => isActive ? "hidden" : "font-medium"}>Sign Up</NavLink>
                            </>
                        )}
                        {user && (
                            <>
                                <NavLink to='/profile/new-tasks' className={({ isActive }) => isActive ? "hidden" : "font-semibold"}>New Tasks</NavLink>
                                <NavLink to='/profile/all-tasks' className={({  isActive }) => isActive ? "hidden" : "font-semibold"}>All Tasks</NavLink>
                                <img src={user?.photo || "/images/Group 6.png"} alt="" className='w-12'/>
                                <div className='bg-red-500 p-1 text-white hover:cursor-pointer rounded-lg' onClick={handleLogout}>logout</div>
                            </>
                        )}
                        
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default NavBar