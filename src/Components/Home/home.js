import React from "react";
import './homeCss.css'
import SideBar from "./sidebar";
import Button from "./button";
import MainContainer from "./mainContainer";
import Header from "../Shared/navbar";

const Home = () =>{
    return (
        <>
            <div className="layout">
                <SideBar />
                <div className="rightSide mx-3">
                    <Button />
                    <MainContainer />
                </div>
            </div>
        </>
    )
}

export default Home