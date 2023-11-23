import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {closeMenu} from '../../utils/sidebarSlice.js'
import { useSearchParams } from "react-router-dom";


const WatchPage = () =>{
    let [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(closeMenu());
    },[]);

return (
    <>
    <div className="row">
        <div className=" col-9 col-md-9 embed-responsive embed-responsive-16by9">
        <iframe src={"https://www.youtube.com/embed/"+searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen `` className="embed-responsive-item"></iframe>
        </div>
        <div className="col-3 col-md-3"></div>
    </div>
    </>
)
}

export default WatchPage;