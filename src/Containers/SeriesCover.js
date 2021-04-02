import React from 'react';
import Tag from './TagContainer';
import './css/SeriesCover.css';

export default function SeriesCover () {
    return (
        <div className="SeriesCoverForm">
            <div className="FormMain">
                <div className="subject">Subject value</div>
                <div className="title">title</div>
            </div>
            <div className="FormInfo">
                <Tag />
                <div className=""></div>
            </div>

        </div>

    );
}