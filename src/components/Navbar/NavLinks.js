import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-white hover:text-yellow-400" smooth to="/">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-yellow-400" smooth to="/services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-yellow-400" to="/gallery">
                Gallery
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-yellow-400" to="/staff">
                Staff
            </HashLink>
            <HashLink className="px-4 font-extrabold text-white hover:text-yellow-400" to="/testimonials">
                Testimonials
            </HashLink>
        </>
    )
}

export default NavLinks;
