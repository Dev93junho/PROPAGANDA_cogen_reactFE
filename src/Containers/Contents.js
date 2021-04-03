import React from 'react';
import Card from './Card';
import "./css/Contents.css";
import { RiThumbUpLine } from "react-icons/ri"
import { GrCircleInformation } from "react-icons/gr"
import { AiTwotoneFire } from "react-icons/ai"
import HotTagForm from './HotTagForm';
import UserCard from './UserCard';
import SeriesCover from './SeriesCover';

class Contents extends React.Component {
    render() {
        return (
            <div className="contents">
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4 style={{color: "#F67600"}}>Top Post</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>
                <div style={{marginBottom: "2rem", padding: "2rem"}}>
                <h1 style={{color: "#6200CE"}}>실시간으로 확인하는<br /><b>HOT TAG<AiTwotoneFire /></b></h1>
                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "2rem"}}>
                        <HotTagForm />
                        <HotTagForm />
                        <HotTagForm />                    
                    </div>
                </div>

                
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4 style={{color: "#6200CE"}}>Subject</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <UserCard />
                </div>

                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4 style={{color:" rgb(53, 50, 50)"}}># tag</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <Card />
                </div>
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4 style={{color: " #00B796"}}>Series</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <SeriesCover />
                </div>
                <div className="contents-header">
                    <RiThumbUpLine size="24" />
                    <h4>User</h4>
                    <GrCircleInformation size="24" color="#F67600"/>
                </div>
                <div className="contents-body">
                    <UserCard />
                </div>
            </div>

        );
    }
}

export default Contents;