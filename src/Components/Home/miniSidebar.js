import React from "react";
import './homeCss.css'
import { useSelector } from "react-redux";
import { BsHouseDoorFill } from "react-icons/bs";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io5";

const MiniSideBar = () => {
    const isMenuOpen = useSelector(store => store.sidebar.isOpen)

    if (!isMenuOpen) return (
        <div className="sidebarFalse mx-1" style={{textAlign:'center'}}>
        <ul className="sidebarListFalse" style={{paddingLeft:0}}>
            <li class="homeButton"><BsHouseDoorFill /></li>
            <li className="mb-3">Home</li>
            <li class="homeButton"><SiYoutubeshorts /></li>
            <li className="mb-3">Shorts</li>
            <li class="homeButton"><MdSubscriptions /></li>
            <li className="mb-3">Subscription</li>
            <li class="homeButton"><IoLogoYoutube /></li>
            <li>You</li>
        </ul>
    </div>
    );

}
export default MiniSideBar