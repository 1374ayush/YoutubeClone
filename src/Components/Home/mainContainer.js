import React, { useEffect, useState } from "react";
import './homeCss.css'
import virat from '../../images/virat-kohli.webp'
import {YoutubeKey} from '../../constants/youtubeAPI.js'
import axios from 'axios'
import VideoCard from "./videoCard.js";

const MainContainer = () => {
    const lis = [1];

    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        axios.get(YoutubeKey).then((response)=>{
            setVideos(response.data.items);
        }).catch((err)=>{console.log(err)})
    },[])
    return (
        <>
            <div className="mainContainer">
                <div className="row">
                    {videos.map(items => (
                        <VideoCard info={items} key={items.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainContainer