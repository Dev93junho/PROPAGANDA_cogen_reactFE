import React from 'react';
import SubjectStateCard from './SubjectStateCard';
import SubjectTagCard from './SubjectTagCard';

export default class Portfolio extends React.Component {
    render() {
        return (
            <>
                <SubjectStateCard />
                <SubjectTagCard />
            </>
        );
    }
}

