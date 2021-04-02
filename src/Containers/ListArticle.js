import React from 'react';
import "./css/ListArticle.css"
import { BiGhost } from 'react-icons/bi'
import Tag from './TagContainer';
import UserCardsm from './UserCard-sm';

function ListArticle () {
    return (
        <div className="card_container">
            <div className="head-row">
                <div className="deltaTime">time</div>
                <div className="sortMethod">
                    A
                </div>
            </div>
            <div className="mid-row">
                <div className="Number">
                    #1
                </div>
                <div className="title">
                    <div className="subjectType">
                       <h6><b>언어역사</b></h6>
                    </div>
                    <div className="headline">
                        <h6>headline</h6> 
                    </div>
                </div>

                <UserCardsm />
                {/* <div className="userInfo">
                    <div className="userIcon">
                        <BiGhost alt="default"/>
                    </div>
                    <div className="userId">
                        <div className="name">
                            myName
                        </div>
                        <div className="fieldType">
                            science
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="bottom-row">
                <div className="tagList">
                    <Tag />
                </div>
                <div className="reply">
                    <div className="comment">
                        댓글 123
                    </div>
                    <div className="origin">
                        Origin 123
                    </div>
                    <div className="response">
                        Response 123
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListArticle;