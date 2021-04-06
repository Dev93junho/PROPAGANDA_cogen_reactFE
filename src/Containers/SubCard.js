import React from 'react';
import { FaRegListAlt } from 'react-icons/fa';
import { AiOutlineFile } from 'react-icons/ai';
import  "./css/CardSubject.css"

function card_subject (){
    return (
        <div className="SubjectCard_container">
            <div className="upper">
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
            <div className="below">
                <div className="TotalPost">
                    <AiOutlineFile size="24"/>
                </div>
            </div>
        </div>

    );
}

export default card_subject;