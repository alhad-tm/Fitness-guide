import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import {Link } from 'react-router-dom'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div onClick={()=>setMenuOpened(true)}> 
          <img
            src={Bars}
            alt=""
            style={{ width: "1.4rem", height: "1.1rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li  onClick={()=>setMenuOpened(false)}><Link to="/">Home</Link></li>
          <li onClick={()=>setMenuOpened(false)}>Programs</li>
          <li onClick={()=>setMenuOpened(false)}>Why us</li>
          <li onClick={()=>setMenuOpened(false)}> <Link to="/plans">Plans</Link></li>
          <li onClick={()=>setMenuOpened(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;


   {/* <li> <Link to='/plans' span={true}> Plans</Link></li> */}