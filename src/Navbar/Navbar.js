import React from "react";
import { useState } from "react";
import HamburgerHover from "./HamburgerHover";
import { GiHamburgerMenu } from "react-icons/gi";
import { navData } from "./navData";
import { Link } from "react-router-dom";


const Navbar = () => {

    const [clickHam, setClikcHam] = useState(false);
    // console.log(navData);

    return (
        <header>
            <div className="navbar">
                <div className="left">
                    <div className="hamburger">

                        <GiHamburgerMenu className="Hamburger-icon" onClick={() => { setClikcHam(!clickHam) }} />
                        {/* <GiHamburgerMenu className="Hamburger-icon" onMouseOver={addHover} onMouseOut={removeHover} /> */}

                        {clickHam && <HamburgerHover />}
                        {/* <HamburgerHover /> */}

                    </div>
                    <div className="list">
                        <ul className="items">

                            {/*  Map method */}
                            {/* {navData.map((item) => {
                                const { id, title, cName, url } = item;
                                return (
                                    <li key={id} className={cName}> <a href={url}> {title} </a> </li>
                                )
                            })} */}


                            <li className="item">
                                <Link to="/" > Disney+Hotstar </Link>
                            </li>
                            <li className="item">
                                <Link to="/tv" > TV </Link>
                            </li>
                            <li className="item">
                                <Link to="/sports" > Sports </Link>
                            </li>
                            <li className="item">
                                <Link to="/movies" > Movies </Link>
                            </li>
                            <li className="item">
                                <Link to="/disney" > Disney+ </Link>
                            </li>
                            <li className="item">
                                <Link to="/kids" > Kids </Link>
                            </li>





                        </ul>
                    </div>
                </div>
                <div className="right">
                    <input type="text" className="search" placeholder="Search" name="" id="" />
                    <button className="subscribe"> Subscribe </button>
                    <button className="login"> Login </button>
                </div>
            </div>
        </header >
    )
};
export default Navbar;