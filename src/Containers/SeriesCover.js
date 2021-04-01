import React from 'react';
import Tag from './TagContainer';
import './css/SeriesCover.css';

export default function SeriesCover () {
    return (
        <div className="SeriesCoverForm">
            <div className="FormMain">
                <div className="subject"></div>
                <div className="title"></div>
            </div>
            <div className="FormInfo">
                <Tag />
                <div className=""></div>
            </div>

        </div>

    );
}