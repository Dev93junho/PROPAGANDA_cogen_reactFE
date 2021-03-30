import React from 'react';
import CardSubject from '../Containers/CardSubject';
import Category from '../Containers/Category';
import TabMenu from '../Containers/TabMenuDisplay';


function Subject () {
    return(
        <>
        <Category />
        <CardSubject />
        <TabMenu />
        </>

    );
}

export default Subject;