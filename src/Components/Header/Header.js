import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Header.css';

const Header = () => {
    const [open,setOpen]=useState(false);
   
    return (
        <nav className=' flex justify-center items-center py-5 bg-sky-200'>
            <div className='w-10 h-10 md:hidden absolute right-4 ' >
           {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
           </div>
           <ul  className={` text-2xl md:flex pb-5 justify-center   `}>
               <li className='mr-10 '><CustomLink  to="/">Home</CustomLink></li>
               <li className='mr-10 '><CustomLink to="/foods">Foods</CustomLink></li>
               <li className='mr-10 '><CustomLink to="/about">About</CustomLink></li>
           </ul>
           
          
           
           
            
        </nav>
    );
};

export default Header;