import React from "react";
import './homeCss.css'
import SideBar from "./sidebar";
import Button from "./button";
import MainContainer from "./mainContainer";

const Home = () =>{
    return (
        <>
            <div className="layout">
                <SideBar />
                <div className="rightSide">
                    <Button />
                    <MainContainer />
                </div>
            </div>
        </>
    )
}

export default Home