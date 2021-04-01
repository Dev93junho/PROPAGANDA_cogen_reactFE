import React from 'react';
import Tabs from '../Containers/TabMenuDisplay'
import Container from 'react-bootstrap/Container'
import Category from '../Containers/Category';
import SeriesCover from '../Containers/SeriesCover';


function Series () {
    return(
        <Container>
            <Category />
            <SeriesCover />
            <Tabs />
        </Container>

    );
}

export default Series;