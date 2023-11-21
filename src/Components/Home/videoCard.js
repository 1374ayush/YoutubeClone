import React from "react";
import './homeCss.css'

const VideoCard = ({info}) => {
    const {id, snippet} = info;
    const {channelTitle, thumbnails, title} = snippet;

    return (
        <>
            <div className="col-4 col-md-3 col-sm-6 mb-3" key={id} >
                <div style={{border:'1px solid white'}} className="card">
                    <img src={thumbnails.medium.url} className="card-img-top cardImg" alt="..." />
                    <div className="card-body" style={{ padding: '10px' }}>
                        <div className="row">
                            <div className="col-3"> <img src={thumbnails.default.url} className="channelLogo" /> </div>
                            <div className="col-9">
                                <p className="title mb-1 fw-semibold ">{title}</p>
                                <p className="channelTitle mb-1">{channelTitle}</p>
                                <p className="card-text mb-1 fw-medium channelViews">{info.statistics.viewCount} views</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard