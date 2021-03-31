import React from 'react';
import Category from '../Containers/Category';
import Tabs from '../Containers/TabMenuDisplay';
import Container from 'react-bootstrap/Container'

function Tag () {
    return(
        <Container >
            <Category/>
            <Tabs />
        </Container>

    );
}

export default Tag;