import React from "react";
import './homeCss.css'

const Button = () =>{
    return (
        <>
            <div className="buttonContainer">
            <button type="button" className="button" style={{backgroundColor:'black',color:'white', marginLeft:15}}>All</button>
            <button type="button" className="button">Live</button>
            <button type="button" className="button">Sport</button>
            <button type="button" className="button">Javascript</button>
            <button type="button" className="button">WebDevelopment</button>
            <button type="button" className="button">Code</button>
            {/* <button type="button" className="button">Music</button>
            <button type="button" className="button">BrosCode</button>
            <button type="button" className="button">AI</button>
            <button type="button" className="button">OpenAI</button>
            <button type="button" className="button">Final</button>
            <button type="button" className="button">Code</button>
            <button type="button" className="button">Code</button> */}
            </div>
        </>
    )
}

export default Button