import React from "react";
import './homeCss.css'
import { useSelector } from "react-redux";

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.sidebar.isOpen)

    if (!isMenuOpen) return null;
    return (
        <>
                <div className="sidebar">
                    <ul className="sidebarList">
                        <li>Home</li>
                        <li>Short</li>
                        <li>Subscription</li>
                    </ul>
                    <hr />
                    <ul className="sidebarList">
                        <li><h5>You </h5></li>
                        <li>Your Channel</li>
                        <li>History</li>
                        <li>Your Video</li>
                        <li>Watch Later</li>
                        <li>Liked Video</li>
                    </ul>
                    <hr />
                    <ul className="sidebarList">
                        <li><h5>Explore :</h5></li>
                        <li>Trending</li>
                        <li>Shopping</li>
                        <li>Movie</li>
                        <li>Live</li>
                        <li>Gaming</li>
                        <li>News</li>
                        <li>Learning</li>
                        <li>Fashion</li>
                        <li>Beauty</li>
                    </ul> 
                    <hr />                   
                    <ul className="sidebarList">
                        <li>Setting</li>
                        <li>Report History</li>
                        <li>Help</li>
                        <li>Send Feedback</li>
                    </ul>


                </div>
        </>
    )
}

export default SideBar