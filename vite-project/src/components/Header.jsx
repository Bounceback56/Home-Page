/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../assets/images/amazon.svg";
import Hamburger from "../assets/images/hamburger.svg";
function Header({searchText,handleChange}){
    const [ismenuopen,setismenuopen]=useState(true);
    
    return (
      <div className="header-parent-container flex  p-4">
        <div className="logo-container flex">
          <a href="/" className="cursor-pointer">
            <img className="h-12 w-20" src={Logo} alt="logo" />
          </a>
          <img className="hamburger hidden" src={Hamburger} alt="Hamburger-icon" onClick={()=>{
            setismenuopen(!ismenuopen);
          }}/>
        </div>
        <div className="search-container">
          <input
            id="search"
            type="text"
            className="h-10 p-2"
            placeholder="Search..."
            value={searchText}
            onChange={handleChange}
          />
        </div>
        <div className={`menu-outer-container ${ismenuopen ? 'block' : 'hidden'} md:flex justify-center mr-4`}>
        <div className="menu-inner-container">
          <ul className="list flex justify-evenly">
            <li><strong>About</strong></li>
            <li><strong>Contact</strong></li>
            <li><strong>Cart</strong></li>
          </ul>
        </div>
        </div>
      </div>
    );
}
export default Header
