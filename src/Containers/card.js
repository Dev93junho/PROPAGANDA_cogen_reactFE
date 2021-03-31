import React from "react";
import "./css/card.css"

function Card({subject, title, imgUrl, body}){
    return (
        <div className="card_article_big">
            <div className="card-Img">
                <img src={imgUrl} alt='' />
            </div>
            <div className="card-subject">
                <h4>{subject}</h4>
            </div>
            <div className="card-title">
                <h4>{title}</h4>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div>1</div>
            <div className="card-info">
                <span>댓글 </span>
                <span>origin </span>
                <span>Response </span>
            </div>
        </div>
    )
}

export default Card;