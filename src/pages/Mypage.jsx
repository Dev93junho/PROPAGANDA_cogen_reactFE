import React from 'react';
import Category from '../Containers/Category';
import Tabs from '../Containers/TabMenuDisplay';
import UserCard from '../Containers/UserCard';
import Container from 'react-bootstrap/Container'


function Mypage(){
        return (
            <Container>
                <Category />
                <UserCard />
                <Tabs />
            </Container>

        );
    }


export default Mypage;