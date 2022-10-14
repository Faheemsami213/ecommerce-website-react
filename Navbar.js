import React from 'react'
import Logo from '../images/logo.png'
import { GrMenu } from "react-icons/gr";
import { GrSearch } from "react-icons/gr";
import { BsCart3} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className=' md: flex justify-center items-center '>
        <ul className=' hidden md:flex md:justify-around md:w-2/5 '>
          <li>
              Home
          </li>
          <li>
              Pages
          </li>
          <li>
              Shop
          </li>
          <li>
              Blog
          </li>
          <li>
              Contact
          </li>
          </ul>
          <div className=' h-16 w-full flex justify-between items-center'>
          <img src={Logo} alt="brand-logo" className=' md:mr-96 ml-48'/>
            <GrMenu className='arro text-3xl cursor-pointer md:hidden'/>
        </div>
        <ul className=' md:flex md:justify-around md:items-center md:w-1/5 hidden'>
          <li>Shop</li>
          <li>Account</li>
          <GrSearch />
          <BsCart3 />
        </ul>
    </div>
  )
}

export default Navbar
