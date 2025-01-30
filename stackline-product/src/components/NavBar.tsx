import React from 'react';
import logo from '../assets/stackline_logo.svg';

const NavBar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-2.5 bg-[#082957]">
            <img src={logo} alt="Logo" className="h-10 py-2 mx-4 my-2" />
        </nav>
    );
};

export default NavBar;