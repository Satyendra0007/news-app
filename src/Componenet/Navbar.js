import React from 'react'
import logo from '../images/logo.png'
import Home from '../images/home.png'
import Business from '../images/business.png'
import EnteEntertainmentr from '../images/entertenment.png'
import General from '../images/general.png'
import Health from '../images/health.png'
import Science from '../images/science.png'
import Sports from '../images/sports.png'
import Technology from '../images/technology.png'
import { Link } from "react-router-dom";

export default function Navbar() {

  const navLink = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
  const navImages = [Business, EnteEntertainmentr, General, Health, Science, Sports, Technology]

  const showNavItem = () => {
    const navitem = document.getElementById('nav_item')
    if (navitem.style.left === "0px") {
      navitem.style.left = "-12rem"
      document.body.classList.remove("stop-scrolling");
    }
    else {
      navitem.style.left = "0px"
      document.body.classList.add("stop-scrolling");
    }
  }

  return (
    <div className='navbar bg-slate-300 sticky top-0 left-0 '>

      <div className="flex justify-center items-center md:justify-start md:ml-3">
        <Link to="/" className='hover:cursor-pointer'><img className='w-20 ' src={logo} alt="" /></Link>
      </div>

      <div id='hamberger' className="absolute top-3 left-2 hover:cursor-pointer md:hidden" onClick={showNavItem}>
        <div className="h-0.5 w-6 m-1.5 bg-gray-600"></div>
        <div className="h-0.5 w-4 m-1.5 bg-gray-600"></div>
        <div className="h-0.5 w-5 m-1.5 bg-gray-600"></div>
      </div>

      <div id='nav_item' className="absolute -left-48 bg-slate-300 h-screen w-48 transition-all ease-in-out duration-1000 md:duration-0  md:left-0 lg:w-56">
        <ul className=''>

          <li className='border-b border-gray-400 cursor-pointer hover:bg-slate-200'>
            <Link to="/">
              <span className='p-3 flex items-center gap-2 lg:pl-6'>
                <img className='w-4 lg:w-5' src={Home} alt="" />
                <p className='font-bold text-xs text-gray-600'>Home</p>
              </span>
            </Link>
          </li>

          {navLink.map((link, index) => {
            return (
              <li className=' border-b border-gray-400 cursor-pointer hover:bg-slate-200 ' key={link}>
                <Link to={`/${link}`}>
                  <span className=' p-3 flex items-center gap-2 lg:pl-6'>
                    <img className='w-4 lg:w-5' src={navImages[index]} alt="" />
                    <p className='font-bold text-xs text-gray-600 '>{link}</p>
                  </span>
                </Link>
              </li>
            )
          })}

        </ul>
      </div>

    </div>
  )
}
