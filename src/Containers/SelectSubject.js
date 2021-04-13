import React from 'react';
import './css/SelectSubject.css';
import Tag from './TagContainer';

export default function SelectSubject () {
    return (
        <div className="SelectSubjectForm">
            <span className="SelectTitle">주제선택</span>

            <span className="SelectSubject">123</span>
           <Tag />
        </div>
    );
} 