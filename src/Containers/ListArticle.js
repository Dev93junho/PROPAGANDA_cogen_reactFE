import React from 'react';
import "./css/ListArticle.css"
import Tag from './TagContainer';
import UserCardsm from './UserCard-sm';


// function closedCard() {
//     return(

//     );
// }

function expandedCard() {
    return (
        <div className="expandPostCard">
            <div className="top">
                펼친 카드 상태 
            </div>
            <div className="bottom">
                <ul>
                    <li>
                        <div>subject</div>
                        <div>title</div>
                        <div>reply</div>
                        <div><Tag /></div>
                    </li>
                    <li>
                        <div>subject</div>
                        <div>title</div>
                        <div>reply</div>
                        <div><Tag /></div>
                    </li>
                    <li>
                        <div>subject</div>
                        <div>title</div>
                        <div>reply</div>
                        <div><Tag /></div>
                    </li>
                </ul>
            </div>
        </div> 
    );    
}

class builtInPostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        this.expandPost = this.expandPost.bind(this);
    }

    expandPost() {
        this.setState(state => ({
            isToggleON: !state.isToggleOn
        }));

    }
    render(){
        return(
        <div className="card_container">
            <div className="head-row">
                <div className="deltaTime">time</div>
                <div className="sortMethod">
                    A
                </div>
            </div>
            <div className="mid-row">
                <div style={{width: "50%", display: "flex"}}>
                <div className="rank">
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
                </div>
                <div style={{width: "50%"}}>
                <UserCardsm />
                </div>
            </div>

            <div className="bottom-row">
                <div className="tagList">
                    <Tag />
                </div>
                <ul className="reply">
                    <li className="comment">
                        댓글 123
                    </li>
                    <li className="origin" onClick={this.expandPost} style={{cursor: "pointer"}}>
                        {this.state.isToggleOn ? 'card_container' : 'expandedCard'}
                        <expandedCard />
                    </li>
                    <li className="response" onClick={this.expandPost}>
                        Response 123
                    </li>
                </ul>
            </div>

        </div>
        )
    }
}

export default builtInPostList;