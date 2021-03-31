import React from 'react';
import CardSubject from '../Containers/CardSubject';
import Category from '../Containers/Category';
import Tabs from '../Containers/TabMenuDisplay';
import Container from 'react-bootstrap/Container'


function Subject () {
    return(
        <Container>
            <Category />
            <CardSubject />
            <Tabs />
        </Container>

    );
}

export default Subject;