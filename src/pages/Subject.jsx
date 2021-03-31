import React from 'react';
import CardSubject from '../Containers/CardSubject';
import Category from '../Containers/Category';
import Tabs from '../Containers/TabMenuDisplay';


function Subject () {
    return(
        <>
        <Category />
        <CardSubject />
        <Tabs />
        </>

    );
}

export default Subject;