import React from 'react';
import Card from './Card';
import "./css/Contents.css";
import { RiThumbUpLine } from "react-icons/ri"
import { GrCircleInformation } from "react-icons/gr"

class Contents extends React.Component {
    render() {
        return (
            <div className="contents">
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4>Top Post</h4>
                    
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4>Subject</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>

                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4>#tag</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4>Series</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4>User</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>
            </div>

        );
    }
}

export default Contents;