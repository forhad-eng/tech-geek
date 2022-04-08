import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-[90%] h-[80px] mx-auto">
            <div className="text-3xl uppercase font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B4388]  to-[#1E90C2]">
                    Tech geeks
                </span>
            </div>
            <div className="flex gap-5 text-xl font-semibold">
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
