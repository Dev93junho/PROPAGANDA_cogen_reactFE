import React from 'react';
import './css/SelectSubject.css';
import Tag from './TagContainer';
import { BsArrowsExpand } from 'react-icons/bs';

export default function SelectSubject () {
    return (
        <div className="SelectSubjectForm">
            <span className="SelectTitle">주제선택</span>
            <span><BsArrowsExpand size="30"/></span> 
            <span className="SelectSubject">123</span>
            <span><Tag /></span>
        </div>
    );
} 