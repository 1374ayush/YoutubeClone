import React from "react";
import './homeCss.css'
import virat from '../../images/virat-kohli.webp'

const MainContainer = () => {
    const lis = [1, 2, 3, 4, 4, 4, 5];
    return (
        <>
            <div className="mainContainer">
                <div className="row">
                    {lis.map((item, index) => (
                        <div className="col-4 col-md-3 col-sm-6 mb-3">
                            <div style={{ width: '18rem' }} className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body" style={{ padding: '10px' }}>
                                    <div className="row">
                                        <div className="col-3"> <img src={virat} className="channelLogo" /> </div>
                                        <div className="col-9">
                                            <h5 className="card-title">Video title</h5>
                                            <p className="card-text">Channel Name</p>
                                            <p className="card-text">Views and subscriber.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MainContainer