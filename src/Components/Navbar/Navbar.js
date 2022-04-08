import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const { pathname } = useLocation()
    return (
        <nav
            className={
                pathname.includes('/blog')
                    ? 'hidden'
                    : `flex justify-between items-center w-[90%] h-[80px] mx-auto font-[teko]`
            }
        >
            <div className="text-4xl uppercase font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4388]  to-[#1E90C2]">
                    Tech geek
                </span>
            </div>
            <div className="flex gap-5 text-xl font-300">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#1B4388]' : 'text-[#1E90C2]')}>
                    Home
                </NavLink>
                <NavLink to="/videos" className={({ isActive }) => (isActive ? 'text-[#1B4388]' : 'text-[#1E90C2]')}>
                    Videos
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-[#1B4388]' : 'text-[#1E90C2]')}>
                    Login
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
