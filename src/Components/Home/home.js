import React from "react";
import './homeCss.css'
import Button from "./button";
import MainContainer from "./mainContainer";
import MiniSideBar from "./miniSidebar";

const Home = () =>{
    return (
        <>
            <div className="layout">
                <MiniSideBar />
                <div className="rightSide mx-3">
                    <Button />
                    <MainContainer />
                </div>
            </div>
        </>
    )
}

export default Home