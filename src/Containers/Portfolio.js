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
                    <SubjectStateCard />
                    <SubjectTagCard />
                    <ActivityGraph />
                </div>
                <div className="contents">
                    <div className="contents_head">
                        <BiGitBranch /> 대표글 더보기
                    </div>
                    <ListArticle />
                </div>

            </div>
        );
    }
}

