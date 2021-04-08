import React from 'react';
import './css/Post.css';
import SubjectTagCard from './SubjectTagCard';
import ListArticle from './ListArticle';



export default function Post() {
    return (
        <div className="PostContainer">
            <div className="top">
                <SubjectTagCard />
                <SubjectTagCard />
                <SubjectTagCard />
            </div>
            <div className="mid">
                <ul className="selectSubject">
                    <li>인문</li>
                    <li>자연과학</li>
                    <li>경제경영</li>
                    <li>문화</li>
                    <li>예술</li>
                    <li>스포츠</li>
                </ul>
            </div>
            <div className="bottom">
                <div className="head">
                    <span>공개글</span>
                    <span>더보기</span>
                </div>
                <div className="publishList">
                    <ListArticle />
                </div>

            </div>

        </div>

    );
} 