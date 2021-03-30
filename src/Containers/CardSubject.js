import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { AiOutlineFile } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import  "./css/CardSubject.css"

function CardSubject (){
    return (
        <div className="SubjectCard_container">
            <div className="head-row">
                <div className="title">
                    <FaRegListAlt size="24"/>
                    <div className="Type_subject">
                        <div className="SubjectName">
                            과학
                        </div>
                        <div className="ClassType">
                            Subject
                        </div>
                    </div>
                </div>
                <button className="btn-follow">Follow</button>
            </div>
            <div className="bottom-row">
                <div className="TotalPost">
                    <AiOutlineFile size="24"/>
                    <div className="postInfo">
                        <div>총 Post 수</div>
                        <div>200 건</div>
                    </div>                   
                </div>
                <div className="TotalFollower">
                    <FiUser size="24" />
                    <div className="FollowerInfo">
                        <div>Follower</div>
                        <div>200 명</div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default CardSubject;