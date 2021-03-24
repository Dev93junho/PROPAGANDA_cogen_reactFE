import React from 'react';
import "./css/Contents.css";
import { RiThumbUpLine } from "react-icons/ri"
import { GrCircleInformation } from "react-icons/gr"

class Contents extends React.Component {
    render() {
        return (
            <div className="contents">
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <span className={this.props.name ? 'contents head' : 'class'}>
 
                    </span>
                    <GrCircleInformation size="24" />
                </div>
            </div>

        );
    }
}

export default Contents;