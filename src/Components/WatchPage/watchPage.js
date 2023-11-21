import React from "react";
import { useParams } from "react-router-dom";

const WatchPage = () =>{
    const param = useParams()
    console.log(param.id)
return (
    <>
    <h1>Watch page {param.id}</h1>
    </>
)
}

export default WatchPage;