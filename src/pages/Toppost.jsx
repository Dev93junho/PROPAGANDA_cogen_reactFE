import React from 'react';
import Category from '../Containers/Category';
import ListContainer from '../Containers/ListContainer';
import Container from 'react-bootstrap/Container'


function Toppost () {
    return(
        <Container>
        <Category />
        <ListContainer />
        </Container>
    );
}

export default Toppost;