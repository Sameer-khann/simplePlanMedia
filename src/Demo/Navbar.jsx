import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; // Importing hamburger and close icons
import Nav from '../sectionsPart/Nav';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <nav>
            <div className='flex items-center justify-between p-4'>
                {/* Logo and categories */}
                <div className='flex items-center gap-8 text-[#2430A0]'>
                    <div className="text-2xl font-semibold font-headcustom">Logo</div>
                    <div className="categories font-bold tracking-wider w-full flex justify-center items-center">
                       <Nav/>
                    </div>
                </div>

                {/* Hamburger icon */}
                <div className="lg:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <RiCloseLine className="text-3xl text-[#2430A0] cursor-pointer" />
                    ) : (
                        <RiMenuLine className="text-3xl text-[#2430A0] cursor-pointer" />
                    )}
                </div>

                {/* Desktop Navigation links */}
                <div className={`hidden lg:flex items-center gap-3`}>
                    <div className="teach tracking-wider text-[#2430A0] font-semibold text-sm">TEACH</div>
                    <div className='border-l-2 border-[#2430A0] w-2 h-5'></div>
                    <div className="singUp border border-[#2430A0] text-[#2430A0] py-1 px-4 rounded-full items-center justify-center flex font-headcustom text-sm font-semibold cursor-pointer hover:bg-[#2430A0] hover:text-white transition-all duration-300 ease-in-out">
                        LOGIN
                    </div>
                    <div className="login bg-[#2430A0] border text-white py-1 px-4 rounded-full items-center justify-center flex font-headcustom text-sm font-semibold cursor-pointer hover:bg-white hover:text-[#2430A0] hover:border-[#2430A0] hover:border transition-all duration-300 ease-in-out">
                        SIGN UP
                    </div>

                </div>
            </div>

            {/* Mobile menu (displayed when isMenuOpen is true) */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-0 left-0 bg-white w-full h-full p-4 shadow-lg transition-all ease-in-out duration-300">
                    {/* Close icon for mobile menu */}
                    <div className="w-full text-end flex justify-end pb-4" onClick={toggleMenu}>
                        <RiCloseLine className="text-3xl text-[#2430A0] cursor-pointer" />
                    </div>
                    {/* Menu items */}
                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className="teach tracking-wider text-[#2430A0] font-semibold text-lg mb-8">TEACH</div>

                        {/* LOGIN Button */}
                        <div className="singUp border border-[#2430A0] text-[#2430A0] py-1 px-4 mb-4 rounded-full w-4/5 items-center justify-center flex font-headcustom text-lg font-semibold cursor-pointer hover:bg-[#2430A0] hover:text-white transition-all duration-300 ease-in-out">
                            LOGIN
                        </div>

                        {/* SIGN UP Button */}
                        <div className="login bg-[#2430A0] text-white py-1 px-4 rounded-full w-4/5 items-center justify-center flex font-headcustom text-lg font-semibold cursor-pointer hover:border-[#2430A0] hover:text-[#2430A0] hover:bg-white hover:border transition-all duration-300 ease-in-out">
                            SIGN UP
                        </div>
                    </div>

                </div>
            )}
        </nav>
    );
}

export default Navbar;
