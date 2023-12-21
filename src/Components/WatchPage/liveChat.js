import React, { useEffect } from "react";
import person from "../../images/person.png";
import "./watchPageCss.css"
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../utils/liveChatSlice";

const ChatMessage = ({name, message, key}) =>{
    return (
        <div className="chatMessage mb-2 rounded p-1" key={key}>
            <img src={person} className="navImg mx-2 mt-1" style={{width:23, height:23}} />
            <div>
               <span className="fw-bold">{name}</span>
               <span className="mx-2">{message}</span>
            </div>
        </div>
    )
}

const LiveChat = () =>{

    const dispatch = useDispatch();
    const chatList = useSelector((store) => store.liveChat.message)

    //Performing Api polling.
    useEffect(()=>{
        
        const interval = setInterval(()=>{
            // console.log("Api called")
            //update the redux...

            dispatch(addChat({
                //we have to put the API data...
                name:"Ayush",
                message:"I have a lot work to do."
            }))

        } , 2000)

        return () =>{ clearInterval(interval) }
    },[])

    return(
        <div className="p-1" style={{ overflowY:'scroll', height:'25rem', border:'1px solid black'}}>
            {
                chatList.map((item, index) => <ChatMessage name={item.name} message={item.message} key={index} />)
            }
        </div>
    )
}

export default LiveChat