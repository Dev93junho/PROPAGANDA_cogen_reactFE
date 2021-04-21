import React from 'react';
import ContributeContainer from './ContributeContainer';
import "./css/ActivityGraph.css"

export default function ActivityGraph () {

    return (
        <div className="wrap">
            <div className="header">
                <h6>Monthly Active Record</h6>
            </div>
            <div className="contents">
                <ContributeContainer />
            </div>
        </div>

    );
}