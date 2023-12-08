import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from '../../utils/sidebarSlice.js'
import { useSearchParams } from "react-router-dom";
import "./watchPageCss.css"
import axios from "axios";
import { YoutubeKey } from "../../constants/youtubeAPI";


const WatchPage = () => {
    let [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    const [videos, setVideos] = useState([]);
    const [video1, setVideo1] = useState();

    useEffect(() => {
        axios.get(YoutubeKey).then((response) => {
            console.log(response.data.items);
            setVideos(response.data.items);
        }).catch((err) => { console.log(err) })
    }, [])

    useEffect(() => {
        // Find the video with the matching id
        const foundVideo = videos.find((video) => video.id === searchParams.get("v"));

        if (foundVideo) {
            setVideo1(foundVideo);
        }
    }, [videos, searchParams]);


    console.log(video1)


    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    if (video1 == null) return (<><h1>Lodaing...</h1></>)
    return (
        <div className="container">
            <div className="row">
                <div className=" col-12 col-md-7 col-sm-12 embed-responsive embed-responsive-16by9">
                    <iframe src={"https://www.youtube.com/embed/" + searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="embed-responsive-item" style={{ width: '100%', height: '140%', borderRadius: 20 }}></iframe>
                    <h5 className="fw-bold">{video1.snippet.title}</h5>

                    <div className="row mt-3">
                        <div className="col-6 col-md-6">

                            <div className="row">
                                <div className="col-7 col-md-7">
                                    <img src={video1.snippet.thumbnails.default.url} className="channelLogo" />
                                    <span className="fs-5 mx-3 fw-medium">{video1.snippet.channelTitle}</span>
                                </div>
                                <div className="col-5 col-md-5"><button className="subscribeBtn mx-3">Subscribe</button></div>
                            </div>

                        </div>
                        <div className="col-6 col-md-6" style={{ textAlign: 'right' }}>
                            <button className="shareBtn">Share</button>
                            <button className="moreBtn mx-3">...</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-sm-12 comment-border">
                    <h5>Suggestions:</h5>
                </div>
            </div>

        </div>
    )
}

export default WatchPage;