import React, { useState } from "react";
import person from "../../images/person.png";

const commentList = [
    {
        name: 'Ayush',
        comment: 'Learning new tech is enjoyment',
        replies: [
            {
                name: 'Ayush',
                comment: 'Learning new tech is enjoyment',
                replies: [
                    {
                        name: 'Ayush',
                        comment: 'Learning new tech is enjoyment',
                        replies: []
                    },
                    {
                        name: 'Ayush',
                        comment: 'Learning new tech is enjoyment',
                        replies: []
                    }
                ]
            },
            {
                name: 'Ayush',
                comment: 'Learning new tech is enjoyment',
                replies: []
            }
        ]
    },
    {
        name: 'Ayush',
        comment: 'Learning new tech is enjoyment',
        replies: []

    },
    {
        name: 'Ayush',
        comment: 'Learning new tech is enjoyment',
        replies: [
            {
                name: 'Ayush',
                comment: 'Learning new tech is enjoyment',
                replies: []
            },
            {
                name: 'Ayush',
                comment: 'Learning new tech is enjoyment',
                replies: []
            }
        ]
    }
]


const Comment = ({ data, key, setReply, stateVar}) => {

    const replyActive = () =>{
        let state = !stateVar
        console.log(state)
        setReply(state);
    }

    return (
        <div className="commentStructure rounded mb-2 p-1" key={key}>
            <img src={person} className="navImg mx-2 mt-1" />
            <div>
                <p className="m-0 fw-bold">{data.name}</p>
                <p className="m-0">{data.comment}</p>
                {data.replies.length != 0 && <p className="fw-bold reply" style={{cursor:'pointer'}} onClick={() => replyActive()} >reply...</p>}
            </div>
        </div>
    )
}

const AllComment = ({ list }) => {
    const [reply, setReply] = useState(false);

    return (
        <>
            {list.map((item, index) => (
                <>
                    <Comment data={item} key={index} setReply={setReply} stateVar={reply} />

            {/* onclick it will change the state */}
                    {reply && <div style={{ marginLeft: 30 }}>
                        <AllComment list={item.replies} />
                    </div>}

                </>
            ))}
        </>
    )
}

const CommentContainer = () => {

    return (
        <>
            <h4>Comments :</h4>
            <AllComment list={commentList} />
        </>
    )
}

export default CommentContainer;