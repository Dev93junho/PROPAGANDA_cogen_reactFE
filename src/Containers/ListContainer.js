import React from 'react';
import "./css/ListContainer.css";
import { BsBookmark } from 'react-icons/bs';
import { BiBookAlt } from 'react-icons/bi';
import ListArticle from './ListArticle';

function ListContainer () {
    return (
        <div className="container">
            <div className="header">
                <div className="upper">
                    <h5>Top Post</h5>
                </div>
                <div className="below">
                    <span><BsBookmark size="24" /></span>
                    <span><BiBookAlt size="24" /></span>
                </div>
            </div>
            <div className="body">
                <li><ListArticle ></ListArticle></li>
            </div>
        </div>

    )
}

export default ListContainer;