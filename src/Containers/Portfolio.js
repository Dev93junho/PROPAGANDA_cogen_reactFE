import React from 'react';
import "./css/Portfolio.css";
import ActivityGraph from './ActivityGraph';
import SubjectStateCard from './SubjectStateCard';
import SubjectTagCard from './SubjectTagCard';
import ListArticle from './ListArticle';
import { BiGitBranch } from  'react-icons/bi'


export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="pfwrap">
                <div className="head">
                    <div className="upper">
                        <SubjectStateCard />
                        <SubjectTagCard  />
                    </div>
                    <div className="bottom">
                      <ActivityGraph />
                    </div>
                </div>
                <div className="contents">
                    <div className="contents-wrap">
                    <div className="contents_head">
                        <span><BiGitBranch /> 대표글 </span> 
                        <button className="addButton">더보기</button>
                    </div>
                    <ListArticle />
                </div>
                </div>

            </div>
        );
    }
}

