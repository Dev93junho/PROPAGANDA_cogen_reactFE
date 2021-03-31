import React from 'react';
import "./css/ListArticle.css"
import { BiGhost } from 'react-icons/bi'

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
                        aaa
                    </div>
                    <div className="headline">
                        headline
                    </div>
                </div>

                <div className="userInfo">
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
                </div>
            </div>
        /
            <div className="bottom-row">
                <div className="tagList">
                    1
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