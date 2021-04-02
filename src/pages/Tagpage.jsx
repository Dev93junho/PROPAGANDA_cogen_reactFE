import React from 'react';
import Category from '../Containers/Category';
import Tabs from '../Containers/TabMenuDisplay';
import Container from 'react-bootstrap/Container'
import CardSubject from '../Containers/CardSubject';

function Tag () {
    return(
        <Container >
            <Category/>
            <CardSubject />
            <Tabs />
        </Container>

    );
}

export default Tag;