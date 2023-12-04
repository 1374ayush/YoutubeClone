import React, { useState, useEffect } from "react"
import axios from "axios";
import { YoutubeKey } from "../../constants/youtubeAPI";


const VideoById=(id)=>{

    const [video1, setVideo1]=useState();

    useEffect(()=>{
        axios.get(YoutubeKey).then((response)=>{
            console.log(response.data.items);

            for(let i of response.data.items){
                if(i.id==id)setVideo1(i);
            }
            
        }).catch((err)=>{
            console.log(err)
            return null;
        })
    },[])

    return video1;

}

export default VideoById;