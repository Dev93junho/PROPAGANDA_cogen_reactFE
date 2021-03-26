/*카드 컨테이너로 적용되는 요소들이 많기 때문에 
모든것을 통합관리하는 조건부 렌더링을 적용합니다.
 */ 
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
            <div className="card-info">
                <span>댓글 </span>
                <span>origin </span>
                <span>Response </span>
                
            </div>
                
        </div>
    )
}

export default Card;