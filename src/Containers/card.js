import React from "react";
import "./css/card.css"

function Card({subject, title, imgUrl, body, amount}){
    return (
        <div className="card_article_big">
            <div className="card-Img">
                <img src={imgUrl} alt='' style={{width: "100%", height:"50%"}}/>
            </div>
            <div className="card-subject">
                <h5>{subject}언어</h5>
            </div>
            <div className="card-title">
                <h5>{title}HeadLine</h5>
            </div>
            <div className="card-body">
                <p>{body}테크니들의 새 책 글로벌 테크, 7가지 욕망을 읽다가 출간되었습니다. 작년 인공지능 비즈니스 트렌드에 이은 두 번째 단행본으로 ‘소비자의 심리적 욕망‘이라는 틀을 통해 글로벌 IT 시장의 최신 사례와 성공 전략을 정리했습니다. …</p>
            </div>
            <div></div>
            <div className="card-info">
                <span>댓글 {amount}</span>
                <span>origin {amount}</span>
                <span>Response {amount}</span>
            </div>
        </div>
    )
}

export default Card;