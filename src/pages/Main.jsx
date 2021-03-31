import React from 'react';
import Category from '../Containers/Category';
import Contents from '../Containers/Contents';
import Container from 'react-bootstrap/Container'

function Main(){
    return (
        <Container>
            <Category />
            <Contents />
        </Container>

    );
}


export default Main;