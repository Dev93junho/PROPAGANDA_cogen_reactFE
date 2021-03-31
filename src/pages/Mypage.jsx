import React from 'react';
import Category from '../Containers/Category';
import Tabs from '../Containers/TabMenuDisplay';
import UserCard from '../Containers/UserCard';


function Mypage(){
        return (
            <>
                <Category />
                <UserCard />
                <Tabs />
            </>

        );
    }


export default Mypage;