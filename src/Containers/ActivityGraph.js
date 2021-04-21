import React from 'react';
import ContributeContainer from './ContributeContainer';
import "./css/ActivityGraph.css"

export default function ActivityGraph () {
    return (
        <div className="wrap">
            <div className="header">
                Monthly
            </div>
            <div className="contents">
            <ContributeContainer />
            </div>
        </div>

    );
}