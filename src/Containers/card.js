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