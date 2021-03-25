/*카드 컨테이너로 적용되는 요소들이 많기 때문에 
모든것을 통합관리하는 조건부 렌더링을 적용합니다.
 */ 
import React from "react";

function Card({title, imgUrl, body}){
    return (
        <div className="container-card">
            <div className="card-Img">
                <img src={imgUrl} alt='' />
            </div>
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
            <div className="info"></div>
                
        </div>
    )
}

export default Card;